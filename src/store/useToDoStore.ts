import type { UUID } from "node:crypto";
import { create } from "zustand";
import toDoMock from "../mock-data/todo.json";
import { Task } from "../model/task";
import { Todolist } from "../model/todolist";
import {isSameDay} from "../model/dateHelper";

const mockData: Todolist[] = toDoMock.map((list) => ({
	...list,
	examDate: new Date(list.examDate),
    tasks: list.tasks.map((task: any) => ({
        ...task,
        startTime: task.startTime ? new Date(task.startTime) : undefined,
        endTime: task.endTime ? new Date(task.endTime) : undefined,
    })),
}));

interface ToDoStore {
	modules: Todolist[];
	addList: (name: string, date: Date) => void;
	removeList: (listId: UUID) => void;
	updateList: (updatedList: Todolist) => void;
	getListById: (listId: UUID) => Todolist | undefined;
	updateTask: (
		listId: string,
		taskId: string,
		updatedTask: Partial<Task>,
	) => void;
	addTask: (listId: string, name: string, description: string) => void;
	removeTask: (listId: string, taskId: string) => void;
	renameModule: (listId: string, newName: string) => void;
    getExamsOnDate: (date: Date) => Todolist[];
    getPlannedTasks: () => Task[];
}

export const useToDoStore = create<ToDoStore>((set, get) => ({
	modules: mockData,
	addList: (name: string, examDate: Date) =>
		set((state) => ({
			modules: [
				...state.modules,
				new Todolist("klsdfjsdkflj", name, [], examDate),
			],
		})),
	removeList: (listId: string) =>
		set((state) => ({
			modules: state.modules.filter((list) => list.id !== listId),
		})),
	updateList: (updatedList: Todolist) =>
		set((state) => ({
			modules: state.modules.map((list) =>
				list.id === updatedList.id ? updatedList : list,
			),
		})),
	getListById: (listId: string) => {
		const state = get();
		return state.modules.find((list) => list.id === listId);
	},
	updateTask: (listId: string, taskId: string, updatedTask: Partial<Task>) =>
		set((state) => ({
			modules: state.modules.map((list) =>
				list.id === listId
					? {
							...list,
							tasks: list.tasks.map((task) =>
								task.id === taskId ? { ...task, ...updatedTask } : task,
							),
						}
					: list,
			),
		})),
	addTask: (listId: string, name: string, description: string) =>
		set((state) => ({
			modules: state.modules.map((list) =>
				list.id === listId
					? {
							...list,
							tasks: [...list.tasks, new Task("id", name, false, description)],
						}
					: list,
			),
		})),
	removeTask: (listId: string, taskId: string) =>
		set((state) => ({
			modules: state.modules.map((list) =>
				list.id === listId
					? { ...list, tasks: list.tasks.filter((task) => task.id !== taskId) }
					: list,
			),
		})),
	renameModule: (listId: string, newName: string) =>
		set((state) => ({
			modules: state.modules.map((list) =>
				list.id === listId ? { ...list, name: newName } : list,
			),
		})),
    getExamsOnDate: (date: Date) =>
        get().modules
            .filter(value => isSameDay(value.examDate, date)),
    getPlannedTasks: () => get().modules.flatMap(module => module.tasks).filter(task => task.startTime !== undefined),
}));
