import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { PopularComponent } from './home/popular/popular.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent, canDeactivate: [AuthGuard] },
  {
    path: 'Courses',
    component: CoursesComponent,
    resolve: { courses: AuthGuard },
  },
  { path: 'Login', component: LoginComponent },
  // { path: 'Courses/Course/:id', component: CourseDetailComponent },
  {
    path: 'Courses',
    canActivateChild: [AuthGuard],
    children: [
      { path: 'Course/:id', component: CourseDetailComponent },
      { path: 'popular', component: PopularComponent },
      {
        path: 'CheckOut',
        component: CheckoutComponent,
        // canActivate: [AuthGuard],
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
