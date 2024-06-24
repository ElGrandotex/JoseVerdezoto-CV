import { Component } from '@angular/core';
import { Education } from '../../interfaces/education.interface';

@Component({
  selector: 'app-education-page',
  templateUrl: './education-page.component.html',
  styleUrl: './education-page.component.css'
})
export class EducationPageComponent {

  url: string = '/assets/education/'

  education: Education[] = [
    {
      institution: 'Unidad Educativa San Luis Gonzaga',
      degree: 'Bachillerato en Ciencias',
      period: '2012-2018',
      extra: 'Participación en dos campamentos nacionales del grupo CEL de colegios RUEI-Ecuador',
      image: 'slg.png'
    },
    {
      institution: 'Escuela Politécnica Nacional',
      degree: 'Ingenieria en Software',
      period: '2018-Actualidad',
      extra: '7mo Semestre',
      image: 'epn.png'
    },
  ]
}
