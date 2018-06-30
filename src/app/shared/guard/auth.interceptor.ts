import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Messages } from "../global/messages";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private router: Router,
        private message: ToastrService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.headers.get('No-Auth') == "True")
            return next.handle(req.clone());

        if (localStorage.getItem('userToken') != null && localStorage.getItem('userToken') != '') { //valida si existe el token sino y crea el header para el request.
            const clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem('userToken'))
            });
            return next.handle(clonedreq)
                .do(
                succ => { },
                err => {
                    switch(err.status)
                    {
                        case 401://Si el back devuelve un 401 lo deriva a acceso denegado.
                            return this.router.navigateByUrl('/access-denied'); 
                        case 404://Si se ingresa una url incorrecta muestra not found.
                            return this.router.navigateByUrl('/not-found'); 
                        case 0: //Si ocurre algun problema en el server.
                            this.message.error(Messages.ConectionProblem);
                            console.log(err.error);
                            break;
                        default: 
                            this.message.error(Messages.Error);
                            console.log(err.error);
                            break;
                    }
                }
                );
        }
        else {
            this.router.navigateByUrl('/login'); //Si no existe el token lo redirecciona al login.
        }
    }
}