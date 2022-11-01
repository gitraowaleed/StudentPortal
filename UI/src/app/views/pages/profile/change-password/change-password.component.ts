import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { TranslateService } from '@ngx-translate/core';

import { BehaviorSubject } from 'rxjs';

import { ToastrService } from 'ngx-toastr';

import { timeout } from 'rxjs/operators';

import { GlobalService } from '../../../../core/global/_services/global.service';

@Component({
  selector: 'kt-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  cPForm: FormGroup;
  isSaving: boolean = false;
  @Input() loadingSubject = new BehaviorSubject<boolean>(false);
  constructor(private fb: FormBuilder,
    private globalService: GlobalService,
    private tS: Title,
    private translate: TranslateService,
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef) {
    this.tS.setTitle(`${this.translate.instant('PROFILE.TITLE')} ${this.translate.instant('PROFILE.CHANGEPASSWORD.TITLE')}${this.globalService.webTitle}`);
  }

  ngOnInit() {
    this.initCPForm();
  }


  initCPForm() {
    this.cPForm = this.fb.group({
      oldPassword: ['', Validators.compose([
        Validators.required])],
      newPassword: ['', Validators.compose([
        Validators.required])],
      verifyPassword: ['', Validators.compose([
        Validators.required])]
    });
  }

  onSubmit() {
    const controls = this.cPForm.controls;
    if (this.cPForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }
    const cpData = {
      oldPassword: controls.oldPassword.value,
      newPassword: controls.newPassword.value,
      verifyPassword: controls.verifyPassword.value
    };
    if (cpData.newPassword != cpData.verifyPassword)
      return;

    this.isSaving = true;
    this.globalService.updateModel('UserLogin/ChangePassword', cpData)
      .subscribe((cpRespons) => {
        if (cpRespons == 200) {
          this.toastr.success(this.translate.instant('PROFILE.CHANGEPASSWORD.SUCCESS.PASSWORDCHANGED'),
            this.translate.instant('PROFILE.CHANGEPASSWORD.SUCCESS.TITLE'), {
            timeOut: 2000,
            progressBar: true,
          });
          this.resetFrom();
        } else if (cpRespons == 406) {
          this.toastr.error(this.translate.instant('PROFILE.CHANGEPASSWORD.ERROR.NOTUSERSAMEPASSWORD'),
            this.translate.instant('PROFILE.CHANGEPASSWORD.ERROR.TITLE'), {
            timeOut: 2000,
            progressBar: true,
          });
        } else {
          this.toastr.error(this.translate.instant('PROFILE.CHANGEPASSWORD.ERROR.CURRENTPASSOWRDINVALID'),
            this.translate.instant('PROFILE.CHANGEPASSWORD.ERROR.TITLE'), {
            timeOut: 2000,
            progressBar: true,
          });
        }
        this.isSaving = false;
        this.cdr.markForCheck();
      });

    // this.loadingSubject.next(true);
    // // this.hasFormErrors = false;
    // const controls = this.cPForm.controls;
    // /** check form */
    // if (this.cPForm.invalid) {
    //   Object.keys(controls).forEach(controlName =>
    //     controls[controlName].markAsTouched()
    //   );
    //   // this.hasFormErrors = true;
    //   this.loadingSubject.next(false);

    //   return;
    // }
  }

  resetFrom() {
    this.cPForm.reset();
  }

  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.cPForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result = control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }
  isPasswordMatch(newPassword: string, verifyPassword: string) {
    const controlOne = this.cPForm.controls[newPassword];
    const controlTwo = this.cPForm.controls[verifyPassword];
    if ((!controlOne || !controlTwo) || controlOne.value == '' || controlTwo.value == '') {
      return 'null';
    }
    if (controlOne.value == null && controlTwo.value == null)
      return 'null';
    if (controlOne.value != controlTwo.value)
      return false;
    if (controlOne.value == controlTwo.value)
      return true;
  }
}
