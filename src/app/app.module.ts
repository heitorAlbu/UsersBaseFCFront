import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsersServiceService } from './users-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponentComponent } from './users-list-component/users-list-component.component';
import { UsersRegisterComponentComponent } from './users-register-component/users-register-component.component';

@NgModule({
  declarations: [	
    AppComponent,
      UsersListComponentComponent,
      UsersRegisterComponentComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsersServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
