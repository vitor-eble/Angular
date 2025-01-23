import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivsCustomizadasComponent } from './diretivs-customizadas.component';

describe('DiretivsCustomizadasComponent', () => {
  let component: DiretivsCustomizadasComponent;
  let fixture: ComponentFixture<DiretivsCustomizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiretivsCustomizadasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivsCustomizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
