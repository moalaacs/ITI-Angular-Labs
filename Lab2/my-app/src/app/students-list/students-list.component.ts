import { Component } from '@angular/core';
import { Student } from '../_models/student';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
  // providers: [StudentService]
})
export class StudentsListComponent {
  // add(newStudent:Student){
  //   this.students.push(newStudent);
  // }
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
