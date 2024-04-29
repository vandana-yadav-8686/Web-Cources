import { AboutComponent } from './About/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { ContectComponent } from './Contect/contect/contect.component';
import { CourcesComponent } from './Cources/cources/cources.component';
import { NewsComponent } from './News/news/news.component';
import { HomeComponent } from './Home/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './SignUp/signup/signup.component';
import { AuthGuard,} from './Guard/auth.guard';



const routes: Routes = [

 
    { path: '', redirectTo:'login',pathMatch:'full' },
    // { path: 'Home', component: HomeComponent,canActivate:[AuthGuard] },
    { path: 'Home', component: HomeComponent },
    { path: 'login', component: LoginComponent,  },
    { path: 'about', component: AboutComponent },
    { path: 'cources', component: CourcesComponent },
 
    { path: 'contact', component: ContectComponent },
    { path: 'news', component:NewsComponent },
    { path: 'signup', component:SignupComponent },
    { path: '**', component:PageNotFoundComponent },
   
   
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
