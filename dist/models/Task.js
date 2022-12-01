export class Task {
    name;
    creator;
    year;
    poster;
    score;
    emmies;
    static generateId() {
        const aNumbers = Math.random() * 6;
        return aNumbers;
    }
    id;
    watched;
    constructor(name, creator, year, poster, score, emmies) {
        this.name = name;
        this.creator = creator;
        this.year = year;
        this.poster = poster;
        this.score = score;
        this.emmies = emmies;
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
