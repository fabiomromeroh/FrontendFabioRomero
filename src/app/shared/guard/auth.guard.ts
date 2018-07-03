import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private message: ToastrService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!(localStorage.getItem('isLoggedin') == 'true') || localStorage.getItem('userToken') == '') { //Si no esta logueado lo redirecciona al login.
            this.router.navigate(['/login']);
            return false;
        }else{
            let admin =  JSON.parse(localStorage.getItem("CurrentUser")).Role == "admin";  
            if(state.url == "/policy" && admin == false) //Si quiere ingresar a polizas y no es admin, le deniega el acceso.
                this.router.navigateByUrl('/access-denied');
            else
                return true;
        }
 
    }


}
