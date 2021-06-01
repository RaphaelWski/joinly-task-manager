import { TaskAction, AddTaskSucessAction } from './../actions/task.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  map,
  exhaustMap,
  catchError,
  switchMapTo,
  switchMap,
} from 'rxjs/operators';
import { ApiService } from 'src/app/core/services/api.service';
import * as taskActions from '../actions/task.actions';

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions, private api: ApiService) {}

  getTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType<TaskAction>(taskActions.TaskActionTypes.GET_TASKS),
      switchMapTo(
        this.api.get('task').pipe(
          map((result) => {
            console.log('response:::', result.tasks);
            return new taskActions.GetTasksSuccessAction(result.tasks);
          }),
          catchError((error: any) =>
            of(new taskActions.GetTasksFailAction(error))
          )
        )
      )
    )
  );

  addTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<TaskAction>(taskActions.TaskActionTypes.ADD_TASK),
      map(action => action['payload']),
      exhaustMap(action => {
        return this.api.post('task', action).pipe(
          map((result) => new taskActions.AddTaskSucessAction()),
          catchError((error: any) =>
            of(new taskActions.AddTaskFailAction(error))
          )
        )
        })
    );
  });

  deleteTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<TaskAction>(taskActions.TaskActionTypes.DELETE_TASK),
      map(action => action['payload']),
      exhaustMap(action => {
        return this.api.delete('task/'+action.id).pipe(
          map((result) => new taskActions.DeleteTaskSuccessAction(result)),
          catchError((error: any) =>
            of(new taskActions.DeleteTaskFailAction(error))
          )
        )
        })
    );
  });
}
