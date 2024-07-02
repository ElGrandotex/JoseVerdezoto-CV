import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienceInterface } from '../../interfaces/experience.interface';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.css'
})
export class ExperiencePageComponent implements OnInit {

  experience!: ExperienceInterface | undefined;
  url: string = '/assets/experience/'
  public experiences: ExperienceInterface[] = [
    {
      title: 'Pasantía Desarrollador Digital',
      company: 'Produbanco',
      period: 'Ago-Nov 2023',
      img: 'produbanco.webp',
      description: 'Durante mi pasantía, apliqué metodologías Scrum para optimizar los procesos. Diseñé la interfaz de usuario de un sitio web con Angular, asegurando una experiencia fluida y atractiva. Colaboré en el desarrollo de la capa BFF con C#, contribuyendo a una arquitectura robusta y segura. Gestioné la base de datos con Microsoft SQL Server para un almacenamiento y recuperación óptimos. Trabajé en el diseño MVC y utilicé Postman para probar y validar los servicios web, garantizando la calidad y confiabilidad de los sistemas.'
    },
    {
      title: 'Pasantía en Operaciones - IT',
      company: 'HIAS',
      period: 'Mar-Ago 2023',
      img: 'hias.webp',
      description: 'Realicé mantenimiento preventivo y correctivo de equipos y programas informáticos. Colaboré en la configuración de dominios y dispositivos para nuevos colegas, facilitando su integración y productividad. Brindé soporte técnico, configurando laptops, tarjetas de entrada, cámaras de videovigilancia e impresoras, garantizando un entorno de trabajo eficiente. Contribuí al flujo de trabajo creando un software personalizado para generar documentos de mantenimiento de laptops, mejorando la trazabilidad y el registro de actividades.'
    },
    {
      title: 'Pasantía en Sistemas',
      company: 'COMWARE',
      period: 'Sept-Oct 2017',
      img: 'comware.webp',
      description: 'Realicé mantenimiento preventivo y correctivo de equipos y programas informáticos. Brindé apoyo técnico a los usuarios internos en cuestiones relacionadas con sus equipos y dispositivos.'
    }
  ]

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( params => {
      const name = params.get('id');
      this.experience = this.experiences.find(exp => exp.company.toLowerCase() === name?.toLowerCase())
    })
  }
}
