import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from '../home/home.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientComponent } from '../client/client.component';
import { PolicyComponent } from '../policy/policy.component';
import { ClientService } from '../services/client.service';
import { PolicyService } from '../services/policy.service';

@NgModule({
    imports: [
        SharedModule,
        LayoutRoutingModule,
        NgbModule.forRoot()
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, HomeComponent, ClientComponent, PolicyComponent],
    providers:[ClientService, PolicyService],
    entryComponents:[]

})
export class LayoutModule {}
