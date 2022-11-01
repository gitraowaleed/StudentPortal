import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { StudentPortalComponent } from './student-portal.component';

import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: StudentPortalComponent,
    children: [
      {
        path: '',
        redirectTo: 'students',
        pathMatch: 'full'
      },
      {
        path: 'students',
        component: StudentsComponent
      },
      {
        path: 'teachers',
        component: TeachersComponent
      },
      {
        path: 'courses',
        component: CoursesComponent
      },
    ]
  }
];

@NgModule({
  declarations: [StudentPortalComponent, StudentsComponent, TeachersComponent, CoursesComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
    TranslateModule,
    MatProgressSpinnerModule,
    // DataTablesModule,
    FormsModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class StudentPortalModule { }
