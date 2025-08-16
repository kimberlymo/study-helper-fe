import type { Task } from "./task";

export class Todolist {
	id: string;
	name: string;
	tasks: Task[];
	examDate: Date;
	constructor(id: string, name: string, tasks: Task[], examDate: Date) {
		this.id = id;
		this.name = name;
		this.tasks = tasks;
		this.examDate = examDate;
	}
}
