import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent {
  department:Department = new Department(1,"","Smart");
  constructor(public departmentService:DepartmentService,public router:Router){
    
  }
  save(){
    if(this.department._id>0 && this.department.name.length!=0&&this.department.location.length!=0){
      this.departmentService.addDepartment(this.department).subscribe(data=>{
        console.log(data);
        this.router.navigateByUrl("/departments")
      })
    }
    else{
      alert("Not valid data");
    }
  }
}
