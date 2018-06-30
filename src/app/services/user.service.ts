import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { APP_CONFIG, IAppConfig } from '../shared/global/app.config';

@Injectable()
export class UserService {

  constructor(private http: HttpClient,
    @Inject(APP_CONFIG) private config: IAppConfig) { }

  readonly rootUrl = this.config.apiEndpoint;

  userAuthentication(email) {

    var data = "Email=" + email;
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded','No-Auth':'True' });
    var auth = this.http.post(this.rootUrl + '/User/Login', data, { headers: reqHeader });
    return auth;
  }

}
