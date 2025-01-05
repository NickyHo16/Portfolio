import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorksHeaderComponent } from './my-works-header.component';

describe('MyWorksHeaderComponent', () => {
  let component: MyWorksHeaderComponent;
  let fixture: ComponentFixture<MyWorksHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyWorksHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyWorksHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
