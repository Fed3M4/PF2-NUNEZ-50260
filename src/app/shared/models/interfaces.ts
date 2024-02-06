export interface Profesor{
    id: number;
    firstName: string;
    lastName: string;
    phone: number;
    email: string;
    password: string;
    curso: Curso;
    isActive: boolean
}

export interface Curso {
    id: Number;
    name: String;
}

export interface Alumnos {
    id: number;
    firstName: string;
    lastName: string;
    phone: number;
    email: string;
    password: string
}