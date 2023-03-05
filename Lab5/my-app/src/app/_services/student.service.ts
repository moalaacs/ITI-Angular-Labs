import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(public http: HttpClient) { }
  baseUrl: string = "http://localhost:8080/students/";

  getAllStudents() {
    return this.http.get<Student[]>(this.baseUrl);
  }

  getStudentById(id: number) {
    return this.http.get<Student>(this.baseUrl + id);
  }

  addStudent(student: Student) {
    return this.http.post<Student>(this.baseUrl, student);
  }

  deleteStudent(id:number){
    return this.http.delete(this.baseUrl+id);
  }

  updateStudent(student:Student){
    return this.http.patch(this.baseUrl+student._id,student);
  }
}
