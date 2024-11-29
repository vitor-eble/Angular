import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelogioDinamicoComponent } from './relogio-dinamico.component';

describe('RelogioDinamicoComponent', () => {
  let component: RelogioDinamicoComponent;
  let fixture: ComponentFixture<RelogioDinamicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelogioDinamicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelogioDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
