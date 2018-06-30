import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AuthInterceptor } from './guard/auth.interceptor';
import { LoaderComponent } from './components/loader/loader.component';
import {MatDialogModule } from '@angular/material';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    MatDialogModule,
    NgbModalModule
  ],
  declarations: [LoaderComponent],
  providers:[
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
  }
  ],
  entryComponents:[],
  exports: [
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    LoaderComponent,
    
  ]
})
export class SharedModule { }

