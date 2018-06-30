import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG, IAppConfig } from '../global/app.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export abstract class BaseService<T> {

  readonly rootUrl = this.config.apiEndpoint;

  constructor(protected http: HttpClient,
    protected prefix: string,
    @Inject(APP_CONFIG) protected config: IAppConfig) { }

    public Add(model: T) {
      return this.http.post(this.rootUrl + this.prefix + '/Update', model);
    }

    public Update(model: T) {
      return this.http.post(this.rootUrl + this.prefix + '/Update', model);
    }

    public GetAll(){
      return this.http.get<T[]>(this.rootUrl + this.prefix + '/GetAll');
    }

    public GetByID(id:number) : Observable<T>
    {
        return this.http.get<T>(this.rootUrl + this.prefix + '/GetByID/' + id);
    }

    public Remove(id:number) : Observable<T>
    {
        return this.http.get<T>(this.rootUrl + this.prefix + '/Remove/' + id);
    }

}
