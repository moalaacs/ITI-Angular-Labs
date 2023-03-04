import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../_models/department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  baseUrl: string = 'http://localhost:8080/departments/';
  constructor(public http: HttpClient) {
    // this.http.get<Department>(this.baseUrl).subscribe((a) => {
    //   console.log(a);
    // });
  }
  getAllDepartments() {
    return this.http.get<Department[]>(this.baseUrl);
  }
  addDepartment(department:Department){
   return this.http.post<Department>(this.baseUrl,department);
  }
  getDepartmentById(id:number){
    return this.http.get<Department>(this.baseUrl+id);
  }
  deleteById(id:number){
    return this.http.delete(this.baseUrl+id);
  }
  update(department:Department){
    return this.http.put(this.baseUrl+department._id,department);
  }
}
