import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {RouterModule,Routes} from '@angular/router';
import { RegistrationComponent } from "./user/registration/registration.component";
import { LoginComponent } from './user/login/login.component'
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { ProfileComponent } from './user/profile/profile.component';
import { GetQuoteComponent } from './user/get-quote/get-quote.component';
import { CreateTicketComponent } from './user/create-ticket/create-ticket.component';
import { ViewTicketsComponent } from './user/view-tickets/view-tickets.component';
import { AdminChangePasswordComponent } from './admin/admin-change-password/admin-change-password.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { ManageTicketsComponent } from './admin/manage-tickets/manage-tickets.component';
import { ViewTicketComponent } from './admin/view-ticket/view-ticket.component';
import { ManageQuotesComponent } from './admin/manage-quotes/manage-quotes.component';
import { QuoteDetailsComponent } from './admin/quote-details/quote-details.component';
import { UserAccessLogsComponent } from './admin/user-access-logs/user-access-logs.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { LogoutComponent } from './logout/logout.component';

const routes:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:MainComponent},
  {path:'user/signup',component:RegistrationComponent},
  {path:'user/login',component:LoginComponent},
  {path:'admin/login',component:AdminLoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'user/change-password',component:ChangePasswordComponent},
  {path:'user/profile',component:ProfileComponent},
  {path:'user/get-quote',component:GetQuoteComponent},
  {path:'user/create-ticket',component:CreateTicketComponent},
  {path:'user/view-tickets',component:ViewTicketsComponent},
  {path:'admin/change-password',component:AdminChangePasswordComponent},
  {path:'admin/manage-users',component:ManageUsersComponent},
  {path:'admin/manage-tickets',component:ManageTicketsComponent},
  {path:'admin/view-ticket/:id',component:ViewTicketComponent},
  {path:'admin/quote-details/:id',component:QuoteDetailsComponent},
  {path:'admin/user-access-logs',component:UserAccessLogsComponent},
  {path:'admin/manage-quotes',component:ManageQuotesComponent},
  {path:'logout',component:LogoutComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegistrationComponent,
    LoginComponent,
    SidebarComponent,
    DashboardComponent,
    ChangePasswordComponent,
    ProfileComponent,
    GetQuoteComponent,
    CreateTicketComponent,
    ViewTicketsComponent,
    AdminChangePasswordComponent,
    ManageUsersComponent,
    ManageTicketsComponent,
    ViewTicketComponent,
    ManageQuotesComponent,
    QuoteDetailsComponent,
    UserAccessLogsComponent,
    AdminLoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
