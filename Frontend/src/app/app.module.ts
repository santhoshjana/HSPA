import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-login/user-register/user-register.component';
import { UserServiceService } from './services/user-service.service';
import { AlertyfyService } from './services/alertyfy.service';
import { AuthService } from './services/auth.service';




const appRoutes: Routes =[
  {path:'', component : PropertyListComponent},
  {path:'rent-property', component : PropertyListComponent},
  {path:'add-property', component : AddPropertyComponent},
  {path:'property-detail/:id', component : PropertyDetailComponent},
  {path:'user/login', component : UserLoginComponent},
  {path:'user/register', component : UserRegisterComponent},
  {path:'**',component:PropertyListComponent}
  
]

@NgModule({
  declarations: [		
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserLoginComponent,
    UserRegisterComponent,
    
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    HousingService,
    UserServiceService,
    AlertyfyService,
    AuthService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
