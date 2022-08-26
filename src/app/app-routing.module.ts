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

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
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
        path:'visualiser',component: VisualiserComponent
    },
    {
        path:'ajouter',component: CreateComponent
    },

     {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'files/:id',component:FileDetailsComponent
    },
    { path: 'details/:id', component:DetailsComponent }
    ,
    {
        path:'**',component : NotfoundComponent
    }
   
   
   

   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
