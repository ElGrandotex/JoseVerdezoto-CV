import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './shared/primeng/primeng.module';
import { MenuBarComponent } from './shared/components/menu-bar/menu-bar.component';
import { PrincipalPageComponent } from './pages/principal-page/principal-page.component';
import { EducationPageComponent } from './pages/education-page/education-page.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { ReferencePageComponent } from './pages/reference-page/reference-page.component';
import { CertificatesPageComponent } from './pages/certificates-page/certificates-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    PrincipalPageComponent,
    EducationPageComponent,
    ExperiencePageComponent,
    ReferencePageComponent,
    CertificatesPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimengModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
