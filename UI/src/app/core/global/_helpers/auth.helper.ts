
import { Injectable } from "@angular/core";
import { HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable()
export class AuthHelper {
    constructor() {
        // AuthenticationService.checkToken();
        // create authorization header with jwt token
        let result = localStorage.getItem('authce9d77b308c149d5992a80073637e4d5');
        var httpHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + result, 'Content-Type': 'application/json' });
        return new HttpResponse({ headers: httpHeaders });
    }

}
