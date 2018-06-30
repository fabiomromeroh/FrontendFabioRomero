import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientService } from '../services/client.service';
import { ClientComponent } from './client.component';

const routes: Routes = [
  {
    path: '', component: ClientComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[ClientService]
})
export class ClientRoutingModule { }
