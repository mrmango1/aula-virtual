export interface Profesor {
    id?: string;
    cedula: string;
    nombres: string;
    apellidos?: string;
    email?: string;
    password?: string;
}
export interface Estudiante {
    id?: string;
    cedula: string;
    nombres: string;
    apellidos?: string;
    email?: string;
    password?: string;
}
export interface Curso {
    id?: string | undefined;
    nombreCurso?: string;
    profesor?: Profesor;
    estudiante?: Estudiante;
}

export interface Calificacion {
    id?: string | undefined;
    curso?: Curso,
    estudiante?: Estudiante,
    nota?: string
}
