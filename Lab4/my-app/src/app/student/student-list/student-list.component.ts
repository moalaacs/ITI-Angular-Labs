import { Component } from '@angular/core';
import { Student } from '../../_models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  add(newStudent:Student){
    this.students.push(newStudent);
  }
  delete(id:number){
    console.log(id);
    this.students=this.students.filter(std=>std.id !== id);
  }
  edit(student:Student){
    let index = this.students.findIndex(std=>std.id==student.id);
    if(student.id>0)
    {
      this.students[index].id = student.id;
      this.students[index].name = student.name;
      this.students[index].age = student.age;
      console.log(student);
    }
    else {
      alert("Not valid id")
    }
  }
  students:Student[]=[
    new Student(1,"Ahmed",8),
    new Student(2,"Khaled",10),
    new Student(3,"Gamal",9),
    new Student(4,"Ali",8),
  ];
}
