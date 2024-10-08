import { Component, OnInit } from '@angular/core';
import { CertificateInterface } from '../../interfaces/certificate.interface';

@Component({
  selector: 'app-certificates-page',
  templateUrl: './certificates-page.component.html',
  styleUrl: './certificates-page.component.css'
})
export class CertificatesPageComponent implements OnInit{

  public url: string = '/assets/certificates/'
  public visible: boolean = false;
  public certi?: CertificateInterface;
  public certificates: CertificateInterface[] = []


  ngOnInit(): void {
      this.certificates = [
        {
          name: 'GitHub Foundations - Certification Program',
          school: 'GitHub',
          date: '2024-06-29',
          img: 'GitHub'
        },
        {
          name: 'Visual Studio Code: Mejora tu velocidad para codificar',
          school: 'DevTalles',
          date: '2024-03-09',
          img: 'vsc'
        },
        {
          name: 'SCRUM Foundation Professional Certificate',
          school: 'CertiProf',
          date: '2022-12-18',
          img: 'SCRUM'
        },
        {
          name: 'EF SET Certificate (Inglés)',
          school: 'EF',
          date: '2024-10-03',
          img: 'EF'
        },
        {
          name: 'Introducción a Bases de Datos',
          school: 'ESFOT',
          date: '2022-11-10',
          img: 'bdd'
        },
        {
          name: 'Transformación Digital',
          school: 'Instituto Europeo de Posgrado',
          date: '2023-02-09',
          img: 'TD'
        },
        {
          name: 'Networking Basics',
          school: 'CISCO Networking Academy',
          date: '2023-03-04',
          img: 'networking'
        },
        {
          name: 'The Third International Conference on Information Systems and Software Technologies',
          school: 'Escuela Politécnica Nacional',
          date: '2022-11-10',
          img: 'ICI'
        },
        {
          name: 'Academic Two',
          school: 'Centro de Educación Continua',
          date: '2023-02-03',
          img: 'cec'
        },
        {
          name: 'Microsoft Excel Básico',
          school: 'CrecePro',
          date: '2022-03-11',
          img: 'excel'
        },
        {
          name: 'Desarrollo de Apps Móviles',
          school: 'Google Actívate',
          date: '2020-05-04',
          img: 'Apps'
        },
      ]
  }

  viewMore(certificate: CertificateInterface){
    this.certi=certificate
    this.visible = true
  }
}
