import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgstyleComponent } from './diretiva-ngstyle.component';

describe('DiretivaNgstyleComponent', () => {
  let component: DiretivaNgstyleComponent;
  let fixture: ComponentFixture<DiretivaNgstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiretivaNgstyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivaNgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
