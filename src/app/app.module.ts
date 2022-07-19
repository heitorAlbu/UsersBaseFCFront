import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsersServiceService } from './users-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponentComponent } from './users-list-component/users-list-component.component';
import { UsersRegisterComponentComponent } from './users-register-component/users-register-component.component';
import { UsersUpdateComponentComponent } from './users-update-component/users-update-component.component';
import { FilterPipe, } from './pipes/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterCPFPipe } from './pipes/filter.cpf.pipe';
import { FilterFonePipe } from './pipes/filter.fone.pipe';
import { FilterEmailPipe } from './pipes/filter.email.pipe';
import { FilterMotherNamePipe } from './pipes/filter.motherName.pipe';
import { FilterStatusPipe } from './pipes/filter.status.pipe';

@NgModule({
  declarations: [
    AppComponent,
      UsersListComponentComponent,
      UsersRegisterComponentComponent,
      UsersUpdateComponentComponent,
      FilterPipe,
      FilterCPFPipe,
      FilterFonePipe,
      FilterEmailPipe,
      FilterMotherNamePipe,
      FilterStatusPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [UsersServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
