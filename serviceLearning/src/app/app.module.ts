import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './header/admin/admin.component';
import { HomeComponent } from './header/home/home.component';
import { HeroComponent } from './header/home/hero/hero.component';
import { SidebarComponent } from './header/home/sidebar/sidebar.component';
import { UserListComponent } from './header/admin/user-list/user-list.component';
import { UserDetailComponent } from './header/admin/user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './Services/user.service';
import { LoggerService } from './Services/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    HomeComponent,
    HeroComponent,
    SidebarComponent,
    UserListComponent,
    UserDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [UserService, LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
