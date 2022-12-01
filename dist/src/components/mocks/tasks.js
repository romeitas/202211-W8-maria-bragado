import { Task } from '../models/task.js';
export const TASKS = [
    new Task('Test task', 'Test creator', 2022, 'Test poster', 2022, 2022),
    new Task('Esto', 'es', 2022, 'una prueba', 2, 2),
    new Task('Esto', 'es', 2022, 'una prueba', 3, 3),
].map((item) => ({ ...item }));
export const initializeTasks = () => TASKS;
