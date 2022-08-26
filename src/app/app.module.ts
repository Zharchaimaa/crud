import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
//import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';


import { httpInterceptorProviders } from './auth/auth-interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { VisualiserComponent } from './visualiser/visualiser.component';
import { UpdateComponent } from './update/update.component';
import { FileDetailsComponent } from './file-details/file-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
  
    HomeComponent,
    AdminComponent,
    DashboardComponent,
    ChartComponent,
    NotfoundComponent,
    CreateComponent,
    DetailsComponent,
    VisualiserComponent,
    UpdateComponent,
    FileDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
