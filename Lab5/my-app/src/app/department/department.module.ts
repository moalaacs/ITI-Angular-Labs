import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentUpdateComponent } from './department-update/department-update.component';

@NgModule({
  declarations: [DepartmentListComponent, DepartmentAddComponent, DepartmentDetailsComponent, DepartmentUpdateComponent],
  imports: [CommonModule, RouterModule, FormsModule]
})
export class DepartmentModule {}
