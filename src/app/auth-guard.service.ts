// src/app/auth/auth-guard.service.ts

import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
      var returnValue = false;

      if(this.auth.isAuthenticated()){
          returnValue = true;
      }

    // if(returnValue == false){
    //     this.router.navigate(['home']);
    // }

    return returnValue;

}
}
