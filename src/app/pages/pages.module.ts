import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { MenuBarComponent } from '../shared/components/menu-bar/menu-bar.component';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { EducationPageComponent } from './education-page/education-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { ReferencePageComponent } from './reference-page/reference-page.component';
import { CertificatesPageComponent } from './certificates-page/certificates-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutPageComponent,
    MenuBarComponent,
    PrincipalPageComponent,
    EducationPageComponent,
    ExperiencePageComponent,
    ReferencePageComponent,
    CertificatesPageComponent,
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PagesModule { }
