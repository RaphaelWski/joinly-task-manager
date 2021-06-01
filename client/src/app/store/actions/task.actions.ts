import { Action, createAction, props } from '@ngrx/store';
import { Task } from './../models/task.model';

export enum TaskActionTypes {
    GET_TASKS = 'Get Tasks',
    GET_TASKS_SUCCESS  = 'Get Tasks Success',
    GET_TASKS_FAIL  = 'Get Tasks Fail',
    
    ADD_TASK = 'Add Task',
    ADD_TASKS_SUCCESS  = 'Add Task Success',
    ADD_TASKS_FAIL  = 'Add Task Fail',
    
    DELETE_TASK = 'Delete Task',
    DELETE_TASKS_SUCCESS  = 'Delete Task Success',
    DELETE_TASKS_FAIL  = 'Delete Task Fail',

    UPDATE_TASK = 'Update Task',
}

export class GetTasksAction implements Action {
    readonly type = TaskActionTypes.GET_TASKS
}

export class GetTasksSuccessAction implements Action {
    readonly type = TaskActionTypes.GET_TASKS_SUCCESS;
    constructor(public payload: Task[]) { }
}

export class GetTasksFailAction implements Action {
    readonly type = TaskActionTypes.GET_TASKS_FAIL;
    constructor(public payload: any) { }
}

export class AddTaskAction implements Action {
    readonly type = TaskActionTypes.ADD_TASK
    constructor(public payload: Task) { }
}

export class AddTaskSucessAction implements Action {
    readonly type = TaskActionTypes.ADD_TASKS_SUCCESS
}

export class AddTaskFailAction implements Action {
    readonly type = TaskActionTypes.ADD_TASKS_FAIL
    constructor(public payload: Task) { }
}

export class DeleteTaskAction implements Action {
    readonly type = TaskActionTypes.DELETE_TASK
    constructor(public payload: Task) { }
}
export class DeleteTaskSuccessAction implements Action {
    readonly type = TaskActionTypes.DELETE_TASKS_SUCCESS
    constructor(public payload: Task[]) { }
}
export class DeleteTaskFailAction implements Action {
    readonly type = TaskActionTypes.DELETE_TASKS_FAIL

    constructor(public payload: Task) { }
}

export class UpdateTaskAction implements Action {
    readonly type = TaskActionTypes.UPDATE_TASK

    constructor(public payload: string) { }
}

export type TaskAction = GetTasksAction | GetTasksSuccessAction | GetTasksFailAction | AddTaskAction | AddTaskSucessAction | AddTaskFailAction | DeleteTaskAction | DeleteTaskSuccessAction | DeleteTaskFailAction | UpdateTaskAction