import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../models/client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients:Client[];
  clientName:string = '';
  showLoader:boolean = false;
  totalClient: number = 0;

  constructor(
    private clientService : ClientService
  ) { }


  ngOnInit() {
    this.LoadClients();
  }

  LoadClients(){
    this.showLoader = true;
    this.clientService.GetAll()
    .subscribe(data=>{
      this.clients = data as Client[];
      this.totalClient = this.clients.length;
    },
    error => {},
    () => this.showLoader = false)
  }

  searchClient(){
    this.showLoader = true;
    this.clientService.GetByName(this.clientName)
    .subscribe(data=>{
      this.clients = data as Client[];
      this.totalClient = this.clients.length;
    },
    error => {},
    () => this.showLoader = false)
  }

}
