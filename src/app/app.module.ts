import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RequestInfoComponent } from './components/request-info/request-info.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioInfoComponent } from './components/portfolio-info/portfolio-info.component';
import { CommonFaqComponent } from './components/common-faq/common-faq.component';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ImageGallaryComponent } from './components/image-gallary/image-gallary.component';
import { NotificationBarComponent } from './components/notification-bar/notification-bar.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ForgotPasswordComponent,
    RequestInfoComponent,
    MenubarComponent,
    LogoutComponent,
    FooterComponent,
    PortfolioInfoComponent,
    CommonFaqComponent,
    PageNotFoundComponent,
    ImageGallaryComponent,
    NotificationBarComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
