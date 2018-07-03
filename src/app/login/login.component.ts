import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { Result } from '../shared/models/result.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    isLoginError : boolean = false;
    showSpinner: boolean = false;

    constructor(
        private userService : UserService, 
        private router: Router
    ) {}

    ngOnInit() {
        localStorage.setItem('isLoggedin', 'false');
        localStorage.setItem('userToken', '');
    }


    OnSubmit(email) {
        this.showSpinner = true;
        this.userService.userAuthentication(email)
        .subscribe((response: Result) =>{
            this.showSpinner = false;

            if(response.Success)
            {
                localStorage.setItem('userToken',response.Data.TokenAccess);
                localStorage.setItem('CurrentUser', JSON.stringify(response.Data));
                localStorage.setItem('isLoggedin', 'true');
                this.router.navigate(['/home']);

            }else{
                return this.isLoginError = true;
            }

          },
          (err : HttpErrorResponse)=>{
            this.isLoginError = true;
          });

        
    }
}
