import { Task } from '../models/task.js';

describe('Given "Task" data model', () => {
    test('Then it should instantiate a task', () => {
        const mockName = 'Test task';
        const mockCreator = 'Test creator';
        const mockYear = 2022;
        const mockPoster = 'Test poster';
        const mockScore = 2022;
        const mockEmmies = 2022;
        const result = new Task(
            mockName,
            mockCreator,
            mockYear,
            mockPoster,
            mockScore,
            mockEmmies
        );
        expect(result).toBeInstanceOf(Task);
        // expect(result).toHaveProperty('Test task', mockName);
        // expect(result).toHaveProperty('Test creator', mockCreator);
        // expect(result).toHaveProperty('2022', mockYear);
        // expect(result).toHaveProperty('Test poster', mockPoster);
        // expect(result).toHaveProperty('2022', mockScore);
        // expect(result).toHaveProperty('2022', mockEmmies);
        // expect(result).toHaveProperty('watched', false);
    });
});
