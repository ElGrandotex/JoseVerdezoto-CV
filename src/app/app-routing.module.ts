import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPageComponent } from './pages/principal-page/principal-page.component';
import { EducationPageComponent } from './pages/education-page/education-page.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { ReferencePageComponent } from './pages/reference-page/reference-page.component';
import { CertificatesPageComponent } from './pages/certificates-page/certificates-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'educacion',
    component: EducationPageComponent
  },
  {
    path: 'experiencia',
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
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
