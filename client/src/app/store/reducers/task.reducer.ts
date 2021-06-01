import { createReducer, on, Action } from '@ngrx/store';
import * as taskActions from './../actions/task.actions';
import { Task } from './../models/task.model';

const initialState: Task[] = [
    {
        id: "1caa4e04-6cb7-40d0-a69d-21cdded8bf62",
        name: 'Hello there'
    }
];

export function TaskReducer(taskList: Task[] = initialState, action:  taskActions.TaskAction): Task[] {
    switch (action.type) {
        case taskActions.TaskActionTypes.GET_TASKS:
            return initialState;
        case taskActions.TaskActionTypes.GET_TASKS_SUCCESS:
            return [...action.payload];
        case taskActions.TaskActionTypes.ADD_TASK:
            return [...taskList, action.payload];
        case taskActions.TaskActionTypes.ADD_TASKS_SUCCESS:
            return [...taskList];
        case taskActions.TaskActionTypes.DELETE_TASK:
            return taskList;
        case taskActions.TaskActionTypes.DELETE_TASKS_SUCCESS:
            console.log('action payload id', action.payload);
            return [...taskList];
        case taskActions.TaskActionTypes.UPDATE_TASK:
            return [...taskList];
        default:
            return taskList;
    }
}