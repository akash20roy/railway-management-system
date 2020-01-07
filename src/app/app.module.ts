import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { JobComponent } from './job/job.component';
import { EnginesComponent } from './engines/engines.component';
import { IndexComponent } from './index/index.component';
import { BoggiesComponent } from './boggies/boggies.component';
import { MotormanComponent } from './motorman/motorman.component';
import { DisplayComponent } from './display/display.component';
import { TicketComponent } from './ticket/ticket.component';
import { RegpassComponent } from './regpass/regpass.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';


@NgModule({
  declarations: [
    AppComponent,
   routingComponents,
   RegisterComponent,
   LoginComponent,
   JobComponent,
   EnginesComponent,
   IndexComponent,
   BoggiesComponent,
   MotormanComponent,
   DisplayComponent,
   TicketComponent,
   RegpassComponent,
   LoginadminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
