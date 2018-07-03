import { Injectable, Inject } from '@angular/core';
import { BaseService } from '../shared/services/base.service';
import { Policy } from '../models/policy.model';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, IAppConfig } from '../shared/global/app.config';

@Injectable()
export class PolicyService extends BaseService<Policy>{
  
  constructor(http: HttpClient,
    @Inject(APP_CONFIG) config: IAppConfig) { 
      super(http, "/policies", config)
    }

    GetByName(name:string)
    {
      if(name != "")
        return this.http.get<Policy[]>(this.rootUrl + "/policies/byclient/" + name);
      else
        return this.GetAll();
    }

}
