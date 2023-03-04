import { core } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';
import { CoreModule } from './core/core.module';
import { CourseModule } from './course/course.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { DepartmentModule } from './department/department.module';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { DepartmentDetailsComponent } from './department/department-details/department-details.component';
import { DepartmentUpdateComponent } from './department/department-update/department-update.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'add', component: StudentAddComponent },
  { path: 'list', component: StudentListComponent },
  { path: 'departments', component: DepartmentListComponent },
  { path: 'departments/add', component: DepartmentAddComponent },
  { path: 'departments/details/:id',component:DepartmentDetailsComponent},
  { path: 'departments/update/:id',component:DepartmentUpdateComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, HomeComponent, ContactComponent, AboutComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StudentModule,
    CourseModule,
    DepartmentModule,
    CoreModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
