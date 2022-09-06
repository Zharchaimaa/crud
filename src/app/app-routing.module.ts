import { UpdatetodoComponent } from './updatetodo/updatetodo.component';
import { MessageDetailsComponent } from './message-details/message-details.component';
import { GestionMComponent } from './gestion-m/gestion-m.component';
import { MessageComponent } from './message/message.component';
import { ChartComponent } from './chart/chart.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { VisualiserComponent } from './visualiser/visualiser.component';
import { FileDetailsComponent } from './file-details/file-details.component';
import { UpdateComponent } from './update/update.component';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { CreatetodoComponent } from './createtodo/createtodo.component';
import { GestionComponent } from './gestion/gestion.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path:'chart',component: ChartComponent
    },
    {
        path:'gestion',component: GestionComponent
    },

    {
        path:'visualiser',
        component: VisualiserComponent
    },
    {
        path:'todo',component:TodoComponent
    },
    {
        path:'ajouter',component: CreateComponent
    },
    {
        path:'modifier',component:UpdateComponent
    },
    {
        path:'ajoutertodo',component:CreatetodoComponent
    },
    {
        path:'modifiertodo',component:UpdatetodoComponent
    },

     {
        path: 'home',
        component: HomeComponent
    },
    {
        path:'message',component:MessageComponent
    },
    {
        path:'gestionM',component:GestionMComponent
    },
    {
        path: 'todoDetails/:id',component:TodoDetailsComponent
    },
    {
        path: 'files/:id',component:FileDetailsComponent
    },
    { path: 'details/:id', component:DetailsComponent }
    ,{
        path:'detailsM/:id',component:MessageDetailsComponent
    },
    {
        path:'**',component : NotfoundComponent
    }
   
   
   

   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
