export class Task {
    id: string;
    name: string;
    description: string;
    completed: boolean;

    constructor(id: string, name: string, completed: boolean, description: string) {
        this.id = id;
        this.name = name;
        this.completed = completed;
        this.description = description;
    }
}