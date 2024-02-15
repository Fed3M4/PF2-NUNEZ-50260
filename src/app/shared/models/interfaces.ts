export interface Profesor{
    id: number;
    firstName: string;
    lastName: string;
    phone: number;
    email: string;
    password: string;
    curso: Curso;
    isActive: boolean;
}

export interface Curso {
    id: number;
    name: string;
    description: string;
    img: string;
}

export interface Alumnos {
    id: number;
    firstName: string;
    lastName: string;
    phone: number;
    email: string;
    password: string;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    phone: number;
    email: string;
    password: string;
    isActive: boolean;
    curso: Curso;
    role: string;
}