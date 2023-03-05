import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent {
  constructor(public departmentService: DepartmentService, public router:Router) {}
  departments: Department[] = [];
  
  ngOnInit() {
    this.departmentService.getAllDepartments().subscribe((data) => {
      this.departments = data;
    });
  }
  delete(id:number){
    if(confirm("Are you sure?")){
      this.departmentService.deleteById(id).subscribe();
      this.router.navigateByUrl("/departments");
    }
  }
}
