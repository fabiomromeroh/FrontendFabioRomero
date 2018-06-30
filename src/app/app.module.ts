import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MESSAGES, Messages } from './shared/global/messages';
import { APP_CONFIG, AppConfig } from './shared/global/app.config';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './shared/guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
 
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    SharedModule,
    NgbModule.forRoot(),
    HttpClientModule,
    
  ],
  declarations: [
    AppComponent,
    
  ],
  providers: [
    AuthGuard, 

    { provide: MESSAGES, useValue: Messages },
    { provide: APP_CONFIG, useValue: AppConfig },
],
  bootstrap: [AppComponent],
  entryComponents:[],

})
export class AppModule { }
