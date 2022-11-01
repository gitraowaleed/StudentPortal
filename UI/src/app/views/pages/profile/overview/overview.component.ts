import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { GlobalService } from '../../../../core/global/_services/global.service';

@Component({
  selector: 'kt-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(private tS: Title,
    private translate: TranslateService,
    private globalService: GlobalService) {
    this.tS.setTitle(`${this.translate.instant('PROFILE.TITLE')} ${this.translate.instant('PROFILE.OVERVIEW.TITLE')}${this.globalService.webTitle}`);
  }

  ngOnInit() {
  }

}
