import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KochweltComponent } from './kochwelt.component';

describe('KochweltComponent', () => {
  let component: KochweltComponent;
  let fixture: ComponentFixture<KochweltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KochweltComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KochweltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
