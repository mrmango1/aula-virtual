import { Injectable } from '@angular/core';
import { Calificacion, Curso } from '../api/manage';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  private currentCurso: Curso;
  private currentCursoEstudent: Calificacion

  setCurrentCurso(datos: Curso) {
    this.currentCurso = datos;
  }

  getCurrentCurso() {
    return this.currentCurso;
  }

  setCurrentCursoEstudent(datos: Calificacion) {
    this.currentCursoEstudent = datos;
  }

  getCurrentCursoEstudent() {
    return this.currentCursoEstudent;
  }
}
