import * as taskActions from './store/actions/task.actions';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription  } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { Task } from './store/models/task.model';
import { AppState } from './store/models/app-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  tasks$: Observable<Task[]>;
  newTask: Task = { id:'', name:'' };

  constructor(private store: Store<AppState>) {
    this.tasks$ = store.pipe(select('taskList'));
  }

  ngOnInit() {
    this.store.dispatch(new taskActions.GetTasksAction());
  }

  addTask(name: string) {
    this.newTask.id = uuid();
    this.newTask.name = name;
    this.store.dispatch(new taskActions.AddTaskAction(this.newTask));
    
    this.newTask = { id:'', name:'' };
  }

  deleteTask(task: Task) {
    this.store.dispatch(new taskActions.DeleteTaskAction(task));
    console.log(`WANT TO DELTE ${JSON.stringify(task)}`);
    console.log(`Task with id ${task.id} deleted`);
  }

  updateTask(id: string) {
    this.store.dispatch(new taskActions.UpdateTaskAction(id));
    console.log(`Task with id ${id} deleted`);
  }

  display(task: Task){
    // task.show = !task.show;
    console.log("show/hide task", task);
  }
}
