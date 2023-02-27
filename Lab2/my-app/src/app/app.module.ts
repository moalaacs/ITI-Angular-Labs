import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { AddStudentComponent } from './students-list/add-student/add-student.component';
import { EditStudentComponent } from './students-list/edit-student/edit-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    AddStudentComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
