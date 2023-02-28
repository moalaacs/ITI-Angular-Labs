import { Component } from '@angular/core';
import { Student } from '../_models/student';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {
  add(newStudent:Student){
    this.students.push(newStudent);
  }
  delete(id:number){
    console.log(id);
    this.students=this.students.filter(std=>std.id !== id);
  }
  students:Student[]=[
    new Student(1,"Ahmed",8),
    new Student(2,"Khaled",10),
    new Student(3,"Gamal",9),
    new Student(4,"Ali",8),
  ];
}
