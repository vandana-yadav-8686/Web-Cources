import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgToastModule } from 'ng-angular-popup';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './Intercepter/token.interceptor';
import { CourceCatagoriesComponent } from './Home/cource-catagories/cource-catagories.component';
import { SearchSectionComponent } from './Home/search-section/search-section.component';
import { FeaturedCoursesComponent } from './Home/featured-courses/featured-courses.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { AboutComponent } from './About/about/about.component';
import { ContectComponent } from './Contect/contect/contect.component';
import { CourcesComponent } from './Cources/cources/cources.component';
import { NewsComponent } from './News/news/news.component';
import { LoginComponent } from './Login/login/login.component';
import { SignupComponent } from './SignUp/signup/signup.component';
import { HeaderComponent } from './Layout/header/header.component';
import { HomeComponent } from './Home/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestimonialComponent } from './Home/testimonial/testimonial.component';

@NgModule({
  declarations: [
    AppComponent,
    CourceCatagoriesComponent,
    SearchSectionComponent,
    FeaturedCoursesComponent,
    FooterComponent,
    AboutComponent,
    ContectComponent,
    CourcesComponent,
    NewsComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule,
    CarouselModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
