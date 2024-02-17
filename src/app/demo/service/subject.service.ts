import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Calificacion, Curso } from '../api/manage';

@Injectable()
export class SubjectService {

    constructor(private http: HttpClient) { }

    getSubject() {
        return this.http.get<any>('http://localhost:1010/getCursos')
            .toPromise()
            .then(res => res as Curso[])
            .then(data => data);
    }


    getStudents(curso: Curso) {
        return this.http.post<any>('http://localhost:1010/getEstudiantesByCurso', curso)
            .toPromise()
            .then(res => res as Calificacion[])
            .then(data => data);
    }

    getGrades(calificacion: Calificacion) {
        return this.http.post<any>('http://localhost:1010/getCalificaciones', calificacion)
            .toPromise()
            .then(res => res as Calificacion[])
            .then(data => data);
    }
    setGrades(calificacion: Calificacion) {
        const { estudiante, curso, ...notas } = calificacion
        return this.http.put<any>('http://localhost:1010/updateCalificacion/' + calificacion.id, notas)
            .toPromise()
            .then(res => res as Calificacion[])
            .then(data => data);
    }
}
