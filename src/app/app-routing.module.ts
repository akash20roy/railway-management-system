import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { JobComponent } from './job/job.component';
import { EnginesComponent } from './engines/engines.component';
import { BoggiesComponent } from './boggies/boggies.component';
import { MotormanComponent } from './Motorman/motorman.component';
import { DisplayComponent } from './Display/display.component';
import { TicketComponent } from './ticket/ticket.component';
import { RegpassComponent } from './regpass/regpass.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
   },
  {  path: 'index',
  component: IndexComponent},
  {  path: 'register',
  component: RegisterComponent},
  {  path: 'login',
  component: LoginComponent},
  {  path: 'job',
  component: JobComponent},
  {  path: 'engines',
  component: EnginesComponent},
  {  path: 'boggies',
  component: BoggiesComponent},
  {  path: 'motorman',
  component: MotormanComponent},
  {  path: 'display',
  component: DisplayComponent},
  {  path: 'ticket',
  component: TicketComponent},
  {  path: 'regpass',
  component: RegpassComponent},
  {  path: 'loginadmin',
  component: LoginadminComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [IndexComponent,RegisterComponent, LoginComponent, JobComponent, EnginesComponent,BoggiesComponent,MotormanComponent,DisplayComponent,TicketComponent,RegpassComponent,LoginadminComponent]