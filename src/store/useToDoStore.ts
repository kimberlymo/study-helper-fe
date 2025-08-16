import {create} from "zustand";
import toDoMock from "../mock-data/todo.json";
import {Todolist} from "../model/todolist";
import {UUID} from "node:crypto";
import {Task} from "../model/task";

const mockData: Todolist[] = toDoMock.map((list) => ({
    ...list,
    examDate: new Date(list.examDate.replace(/\./g, '/')), // Convert "10.07.2025" to "10/07/2025" and parse as Date
}));

interface ToDoStore {
    lists: Todolist[];
    addList: (name: string, date: Date) => void;
    removeList: (listId: UUID) => void;
    updateList: (updatedList: Todolist) => void;
    getListById: (listId: UUID) => Todolist | undefined;
    updateTask: (listId: string, taskId: string, updatedTask: Partial<Task>) => void;
    addTask: (listId: string, name: string, description: string) => void;
    removeTask: (listId: string, taskId: string) => void;
}

export const useToDoStore = create<ToDoStore>((set, get) => ({
    lists: mockData,
    addList: (name: string, examDate: Date) => set((state) => ({
        lists: [...state.lists, new Todolist("klsdfjsdkflj", name, [], examDate)],
    })),
    removeList: (listId: string) => set((state) => ({lists: state.lists.filter((list) => list.id !== listId)})),
    updateList: (updatedList: Todolist) => set((state) => ({
        lists: state.lists.map((list) => (list.id === updatedList.id ? updatedList : list)),
    })),
    getListById: (listId: string) => {
        const state = get();
        return state.lists.find((list) => list.id === listId);
    },
    updateTask: (listId: string, taskId: string, updatedTask: Partial<Task>) => set((state) => ({
        lists: state.lists.map((list) =>
            list.id === listId
                ? {
                    ...list,
                    tasks: list.tasks.map((task) =>
                        task.id === taskId ? {...task, ...updatedTask} : task
                    ),
                }
                : list
        ),
    })),
    addTask: (listId: string, name: string, description: string) => set((state) => ({
        lists: state.lists.map((list) =>
            list.id === listId ? {...list, tasks: [...list.tasks, new Task("id", name, false, description)]} : list
        ),
    })),
    removeTask: (listId: string, taskId: string) => set((state) => ({
        lists: state.lists.map((list) =>
            list.id === listId ? {...list, tasks: list.tasks.filter((task) => task.id !== taskId)} : list
        ),
    })),
}));