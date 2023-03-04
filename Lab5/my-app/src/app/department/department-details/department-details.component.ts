import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent {
  department:Department = new Department(0,"","");
  constructor(public departmentService:DepartmentService,public activatedRoute:ActivatedRoute){
    
  }
  ngOnInit(){
    this.activatedRoute.params.subscribe(i=>{
      this.departmentService.getDepartmentById(i['id']).subscribe(data=>{
        this.department=data;
      })
    })
  }
}
