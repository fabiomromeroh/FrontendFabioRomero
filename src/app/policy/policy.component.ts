import { Component, OnInit } from '@angular/core';
import { Policy } from '../models/policy.model';
import { PolicyService } from '../services/policy.service';
import { ClientService } from '../services/client.service';
import { Client } from '../models/client.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  content:any;
  policies:Policy[];
  client:Client = new Client();
  showLoader: boolean = false;
  clientName: string;
  totalPolicies:number = 0;

  constructor(
    private policyService: PolicyService,
    private clientService: ClientService,
    private modalService: NgbModal

  ) { }

  ngOnInit() {
    this.LoadPolicies();
  }

  searchPolicy(){
    this.showLoader = true;

      this.policyService.GetByName(this.clientName)
      .subscribe(data=> {
        this.policies = data as Policy[];
        this.totalPolicies = this.policies.length;
      },
        error => {},
        () => this.showLoader = false)
  }

  LoadPolicies(){
    this.showLoader = true;

    this.policyService.GetAll()
    .subscribe(data=>{
      this.policies = data as Policy[];
      this.totalPolicies = this.policies.length;

    },
    error => {},
    () => this.showLoader = false)
  }

  ShowClient(policyid:string){
    this.showLoader = true;

      this.clientService.GetByPolicyID(policyid)
      .subscribe(data=>{
        this.client = data as Client;
      },
      error => {},
      () => this.showLoader = false)
  }


  open(content) {
    this.modalService.open(content, {})
    .result.then((result) => {
    }, (reason) => {
      this.client = new Client();

    });
  }


}
