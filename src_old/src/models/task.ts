type Series = {
    id: number;
    name: string;
    creator: string;
    year: number;
    poster: string;
    watched: boolean;
    score: number;
    emmies: number;
};
export class Task implements Series {
    static generateId() {
        const aNumbers = Math.random() * 6;
        return aNumbers;
    }

    id: number;
    watched: boolean;

    constructor(
        public name: string,
        public creator: string,
        public year: number,
        public poster: string,
        public score: number,
        public emmies: number
    ) {
        this.id = Task.generateId();
        this.name = name;
        this.creator = creator;
        this.year = year;
        this.poster = poster;
        this.watched = false;
        this.score = score;
        this.emmies = emmies;
    }
}
