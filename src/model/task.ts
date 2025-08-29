export class Task {
	id: string;
	name: string;
	description: string;
	completed: boolean;
    startTime?: Date;
    endTime?: Date;

	constructor(
		id: string,
		name: string,
		completed: boolean,
		description: string,
        startTime?: Date,
        endTime?: Date,
	) {
		this.id = id;
		this.name = name;
		this.completed = completed;
		this.description = description;
	}
}
