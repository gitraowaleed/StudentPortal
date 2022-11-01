// Angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FullCalendarModule } from '@fullcalendar/angular';

import { PartialsModule } from '../partials/partials.module';
import { CoreModule } from '../../core/core.module';

import { CalendarComponent } from './calendar/calendar.component';
import { MyPageComponent } from './my-page/my-page.component';
import { UserManagementModule } from './user-management/user-management.module';
import { ECommerceModule } from './apps/e-commerce/e-commerce.module';
import { MailModule } from './apps/mail/mail.module';

@NgModule({
	declarations: [MyPageComponent, CalendarComponent],
	exports: [],
	imports: [
		CommonModule,
		FullCalendarModule,
		HttpClientModule,
		FormsModule,
		CoreModule,
		PartialsModule,
		MailModule,
		ECommerceModule,
		UserManagementModule,
	],
	providers: [],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule {
}
