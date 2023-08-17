import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionesProfesorComponent } from './calificaciones-profesor.component';

describe('CalificacionesProfesorComponent', () => {
  let component: CalificacionesProfesorComponent;
  let fixture: ComponentFixture<CalificacionesProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalificacionesProfesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalificacionesProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
