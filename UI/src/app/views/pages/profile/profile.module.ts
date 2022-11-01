import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from '../profile/profile.component';

import { OverviewComponent } from './overview/overview.component';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '../../../core/core.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        redirectTo: 'Overview',
        pathMatch: 'full'
      },
      {
        path: 'Overview',
        component: OverviewComponent
      },
      {
        path: 'ChangePassword',
        component: ChangePasswordComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    ProfileComponent,
    OverviewComponent,
    ChangePasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    CoreModule,
    ReactiveFormsModule,
    // ToastrModule.forRoot({
    //   timeOut: 10000,
    //   positionClass: 'toast-bottom-right',
    //   preventDuplicates: true,
    // }), // ToastrModule added
  ],
  exports: [
    ProfileComponent],
})
export class ProfileModule { }
