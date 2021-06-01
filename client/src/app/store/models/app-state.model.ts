import { Task } from './task.model';

export interface AppState {
    readonly taskList: Task[];
}