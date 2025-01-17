import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import AOS from 'aos';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PrivacyComponent } from '../privacy/privacy.component';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule , HttpClientModule, FormsModule, PrivacyComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  navigateToSection() {
    const section = document.getElementById('header-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendbutton') sendbutton!: ElementRef;

  [key: string]: any;

  showWarningName = false;
  showWarningEmail = false;
  showWarningMessage = false;

  showGreenCheckName = false;
  showGreenCheckEmail = false;
  showGreenCheckMessage = false;

  isPrivacyChecked: boolean = false; // Initialer Zustand der Checkbox

  showLoader = false;
  emailSent = false;
  showSpanMsg = false;

  addClassToButton = false;

  target!: HTMLInputElement;

  constructor(private http: HttpClient, private router: Router, private translationService: TranslationService) {}

  ngOnInit(): void {
    AOS.init();
  }

  // Funktion zum Übersetzen von Text
  translate(key: string): string {
    return this.translationService.getTranslation(key);
  }

  async sendMail() {
    this.emailSent = true;
    this.showLoader = true;
    this.showSpanMsg = false;

    let formData = new FormData();
    formData.append('name', this.nameField.nativeElement.value);
    formData.append('email', this.emailField.nativeElement.value);
    formData.append('message', this.messageField.nativeElement.value);

    try {
      const response = await fetch(
        'https://nicole-hollaender.com/send_mail.php',
        {
          method: 'POST',
          body: formData,
          mode: 'cors', // Setzt den Modus auf CORS
            headers: {
                // Fügt Standard-Header hinzu, falls benötigt
                'Accept': 'application/json', 
                // Falls der Server einen bestimmten Content-Type erwartet
                'Content-Type': 'application/x-www-form-urlencoded',
        }
      }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Server Response:', result); // Überprüfe, ob success true ist

      if (result.success) {
        console.log('Email sent successfully');
        this.emailSent = true;
        this.showSpanMsg = true;
        this.showLoader = false;
        setTimeout(() => {          
          this.resetForm();
        }, 2500);
      } else {
        console.error('Failed to send email:', result.message);
        this.emailSent = false;
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      this.emailSent = false;
    } finally {
      this.showLoader = false;
    }
  }

  resetForm() {
    this.nameField.nativeElement.value = '';
    this.emailField.nativeElement.value = '';
    this.messageField.nativeElement.value = '';

    // Reset other flags and styles
    this.showWarningName = false;
    this.showWarningEmail = false;
    this.showWarningMessage = false;
    this.showGreenCheckName = false;
    this.showGreenCheckEmail = false;
    this.showGreenCheckMessage = false;
    this.showLoader = false;
    this.emailSent = false;
    this.showSpanMsg = false;
    this.addClassToButton = false;
    

    // Clear CSS classes
    this.nameField.nativeElement.classList.remove(
      'has-content',
      'empty-focused',
      'input-bg-warning'
    );
    this.emailField.nativeElement.classList.remove(
      'has-content',
      'empty-focused',
      'input-bg-warning'
    );
    this.messageField.nativeElement.classList.remove(
      'has-content',
      'empty-focused',
      'input-bg-warning'
    );

    // Scroll to the top of the form if needed
    const formSection = document.getElementById('myForm');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onBlur(event: Event) {
    this.target = event.target as HTMLInputElement;
    console.log('Blur event triggered, target set to:', this.target);
    this.checkInputState();
  }

  //onInput(inputType: string) {
  //  this.checkInputState();
  //  this.checkInputValue(inputType);
  //  this.showGreenCheckImage(inputType);
  //}

  onInput(inputType: string) {
    //console.log('onInput event triggered for:', inputType);
    if (!this.target) {
      //console.error('Target is not defined in onInput!');
      return;
    }

    // Für das Feld 'message' explizit das Ziel setzen
    if (inputType === 'message') {
    this.target = this.messageField.nativeElement;
  }

    this.checkInputState();
    this.checkInputValue(inputType);
    this.showGreenCheckImage(inputType);
  }

  //checkInputState() {
  //  this.target.value.length > 0
  //    ? this.changeInputsGreen()
  //    : this.changeInputsRed();
  //}

  checkInputState() {
    if (!this.target) {
      console.error('Target is not defined!');
      return;
    }

    if (this.target.value.length > 0) {
      this.changeInputsGreen();
    } else {
      this.changeInputsRed();
    }
  }

  changeInputsGreen() {
    this.target.classList.add('has-content');
    this.target.classList.remove('empty-focused');
    this.target.classList.remove('input-bg-warning');
  }

  changeInputsRed() {
    this.target.classList.remove('has-content');
    this.target.classList.add('empty-focused');
    this.target.classList.add('input-bg-warning');
  }

  checkInputValue(inputType: string) {
    this.target.value.length > 0
      ? this.showRequiredMessage(inputType)
      : this.hideRequiredMessage(inputType);
  }

  showRequiredMessage(inputType: string) {
    let oneInputField =
      'showWarning' + inputType.charAt(0).toUpperCase() + inputType.slice(1);
    this[`${oneInputField}`] = false;
  }

  hideRequiredMessage(inputType: string) {
    let oneInputField =
      'showWarning' + inputType.charAt(0).toUpperCase() + inputType.slice(1);
    this[`${oneInputField}`] = true;
  }

  showGreenCheckImage(inputType: string) {
    let oneInputField =
      'showGreenCheck' + inputType.charAt(0).toUpperCase() + inputType.slice(1);
    //this[`${oneInputField}`] = this.target.value.length > 0;
    if (inputType === 'email') {
      // Spezifische Prüfung für das E-Mail-Feld
      const emailField = this.emailField.nativeElement.value;
      const emailPattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}$/;
      this[`${oneInputField}`] = emailPattern.test(emailField); // Grüner Haken nur bei gültiger E-Mail
      this.showWarningEmail = !emailPattern.test(emailField); // Required-Nachricht bei ungültiger E-Mail
      this.target = this.emailField.nativeElement; // Ziel korrekt setzen
    } else {
      // Standardprüfung für andere Felder
      const field = this[inputType + 'Field'].nativeElement.value.trim();
      this[`${oneInputField}`] = field.length > 0; // Grüner Haken bei nicht-leeren Feldern
      this[`showWarning${inputType.charAt(0).toUpperCase() + inputType.slice(1)}`] = field.length === 0; // Required-Nachricht bei leeren Feldern
    }
  }
}
