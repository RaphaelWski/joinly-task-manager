import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TaskReducer } from './store/reducers/task.reducer';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskEffects } from './store/effects/task.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      taskList: TaskReducer,
    }),
    EffectsModule.forRoot([TaskEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
