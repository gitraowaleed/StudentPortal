import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GlobalService } from '../../../core/global/_services/global.service';
import { User } from '../../../core/auth';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'kt-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private globalService: GlobalService,
    private translate: TranslateService,
    private cdr: ChangeDetectorRef) { }

  user: any = {};
  mobileStatus: string = this.translate.instant('PROFILE.MOBILECONFIRM.NOTVERIFY');
  ngOnInit() {
    this.globalService.getAll('UserProfile').subscribe((userRespo) => {
      this.user = userRespo != null ? userRespo : {};
      if (this.user.mobileNumberComfirmed)
        this.mobileStatus = this.translate.instant('PROFILE.MOBILECONFIRM.VERIFIED');
      this.cdr.markForCheck();
    });
  }

}
