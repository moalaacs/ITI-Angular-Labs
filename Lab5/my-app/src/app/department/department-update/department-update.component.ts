import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
  selector: 'app-department-update',
  templateUrl: './department-update.component.html',
  styleUrls: ['./department-update.component.css']
})
export class DepartmentUpdateComponent {
  department:Department= new Department(0,"","");
  constructor(public departmentService:DepartmentService,public activatedRoute:ActivatedRoute){
  }
  update(department:Department){
    this.departmentService.update(department).subscribe();
  }
  ngOnInit(){
    this.activatedRoute.params.subscribe(i=>{
      this.departmentService.getDepartmentById(i['id']).subscribe(data=>{
        this.department=data;
      });
    })
  }
}
