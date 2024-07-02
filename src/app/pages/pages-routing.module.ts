import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { EducationPageComponent } from './education-page/education-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { ReferencePageComponent } from './reference-page/reference-page.component';
import { CertificatesPageComponent } from './certificates-page/certificates-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PrincipalPageComponent } from './principal-page/principal-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'principal',
        component: PrincipalPageComponent
      },
      {
        path: 'educacion',
        component: EducationPageComponent
      },
      {
        path: 'experiencia/:id',
        component: ExperiencePageComponent
      },
      {
        path: 'referencias',
        component: ReferencePageComponent
      },
      {
        path: 'certificados',
        component: CertificatesPageComponent
      },
      {
        path: 'contacto',
        component: ContactPageComponent
      },
      { path: '**', redirectTo: 'principal' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
