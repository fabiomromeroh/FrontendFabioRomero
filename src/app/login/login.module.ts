import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { UserService } from '../services/user.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [CommonModule, LoginRoutingModule, FormsModule, SharedModule],
    declarations: [LoginComponent],
    providers: [UserService]
})
export class LoginModule {}
