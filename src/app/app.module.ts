import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
//import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
//import { MatMenuModule} from '@angular/material/menu';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { VisualiserComponent } from './visualiser/visualiser.component';
import { UpdateComponent } from './update/update.component';
import { FileDetailsComponent } from './file-details/file-details.component';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { CreatetodoComponent } from './createtodo/createtodo.component';
import { UpdatetodoComponent } from './updatetodo/updatetodo.component';
import { GestionComponent } from './gestion/gestion.component';
import { ExporterComponent } from './exporter/exporter.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MessageComponent } from './message/message.component';
import { GestionMComponent } from './gestion-m/gestion-m.component';
import { HeaderComponent } from './header/header.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from './calendar/calendar.component';
import dayGridPlugin from '@fullcalendar/daygrid';
import { MessageDetailsComponent } from './message-details/message-details.component';
//import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
/*FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);*/
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
    FileDetailsComponent,
    TodoComponent,
    TodoDetailsComponent,
    CreatetodoComponent,
    UpdatetodoComponent,
    GestionComponent,
    ExporterComponent,
    SidenavComponent,
    MessageComponent,
    GestionMComponent,
    HeaderComponent,
    CalendarComponent,
    MessageDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FullCalendarModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
