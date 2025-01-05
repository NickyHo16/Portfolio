import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailIconsComponent } from './mail-icons.component';

describe('MailIconsComponent', () => {
  let component: MailIconsComponent;
  let fixture: ComponentFixture<MailIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailIconsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MailIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
