import { Injectable, Inject } from '@angular/core';
import { BaseService } from '../shared/services/base.service';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, IAppConfig } from '../shared/global/app.config';
import { Client } from '../models/client.model';

@Injectable()
export class ClientService extends BaseService<Client>{

  constructor(http: HttpClient,
    @Inject(APP_CONFIG) config: IAppConfig) { 
      super(http, "/Client", config)
    }

    GetByName(name:string)
    {
      if(name != "")
        return this.http.get<Client[]>(this.rootUrl + "/Client/GetByName/" + name);
      else
        return this.GetAll();
    }

    GetByPolicyID(policiid:string)
    {
        return this.http.get<Client>(this.rootUrl + "/Client/GetByPolicy/" + policiid);
    }
}
