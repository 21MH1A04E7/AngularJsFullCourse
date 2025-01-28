import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TestimonyComponent } from './home/testimony/testimony.component';
import { ServicesComponent } from './home/services/services.component';
import { PopularComponent } from './home/popular/popular.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { BannerComponent } from './home/banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CheckoutComponent,
    ContactComponent,
    CoursesComponent,
    CourseDetailComponent,
    FooterComponent,
    HomeComponent,
    TestimonyComponent,
    ServicesComponent,
    PopularComponent,
    ContactUsComponent,
    BannerComponent,
    HeaderComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
