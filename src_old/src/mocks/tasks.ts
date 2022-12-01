import { Task } from '../models/task.js';

export const TASKS = [
    new Task(
        'The Sopranos',
        'David Chase',
        1999,
        'https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
        5,
        21
    ),
    new Task(
        'The Sopranos',
        'David Chase',
        1999,
        'https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
        5,
        21
    ),
    new Task(
        'The Sopranos',
        'David Chase',
        1999,
        'https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
        5,
        21
    ),
].map((item) => ({ ...item }));

export const initializeTasks = () => TASKS;
