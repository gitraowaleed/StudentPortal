// Angular
import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { currentUser, Logout, User } from '../../../../../core/auth';
import { AppState } from '../../../../../core/reducers';
import { GlobalService } from '../../../../../core/global/_services/global.service';

@Component({
	selector: 'kt-user-profile',
	templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
	// Public properties
	user$: Observable<User>;
	user: any;

	@Input() avatar = true;
	@Input() greeting = true;
	@Input() badge: boolean;
	@Input() icon: boolean;

	/**
	 * Component constructor
	 *
	 * @param store: Store<AppState>
	 */
	constructor(private store: Store<AppState>,
		private globalService: GlobalService, private cdr: ChangeDetectorRef) {
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit(): void {
		// this.user$ = this.store.pipe(select(currentUser));
		this.globalService.getAll('UserProfile').subscribe(response => {
			// this.user$ = response;
			this.user = response;
			// this.user.pic = response.profilePic === null ? './assets/media/users/default.jpg' : response.profilePic;
			this.cdr.markForCheck();
		});
	}

	/**
	 * Log out
	 */
	logout() {
		this.store.dispatch(new Logout());
	}
}
