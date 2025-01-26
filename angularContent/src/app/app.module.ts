import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ObservableComponent } from './observable/observable.component';
import { NewTaskComponent } from './observable/new-task/new-task.component';
import { ShowTaskComponent } from './observable/show-task/show-task.component';
import { FormsModule } from '@angular/forms';
import { SubjectComponent } from './subject/subject.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ObservableComponent,
    NewTaskComponent,
    ShowTaskComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
