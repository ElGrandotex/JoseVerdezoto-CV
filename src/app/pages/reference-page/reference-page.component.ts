import { Component } from '@angular/core';
import { Reference } from '../../interfaces/reference.interface';

@Component({
  selector: 'app-reference-page',
  templateUrl: './reference-page.component.html',
  styleUrl: './reference-page.component.css'
})
export class ReferencePageComponent {

  public references: Reference[] = [
    {
      name: 'Óscar Álvarez',
      company: 'HIAS',
      position: 'IT Specialist',
      phone: '+593 99 731 2395',
      email: 'oscar.alvarez@hias.org'
    },
    {
      name: 'Santiago Andrade',
      company: 'Comware S.A.',
      position: 'Ingeniero Especialista',
      phone: '+593 98 704 5930',
      email: 'sandrade@comware.com.ec'
    },
    {
      name: 'Christian Albán',
      company: 'Netdigital S.A.',
      position: 'Gerente General',
      phone: '+593 98 469 1464',
      email: 'calban@netdigital.com.ec'
    },
  ]
}
