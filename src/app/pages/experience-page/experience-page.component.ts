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
      period: 'Ago-Dic 2023',
      img: 'produbanco.webp',
      description: ['Colaboré activamente en un equipo ágil bajo la metodología Scrum, participando en sprints y reuniones diarias para asegurar el cumplimiento de los objetivos del proyecto.',
        'Desarrollé la interfaz de usuario utilizando Angular, asegurando una experiencia fluida y responsive.',
        'Contribuí en el desarrollo del Backend for Frontend (BFF), facilitando la integración entre el frontend y los servicios backend.',
        'Implementé el patrón de arquitectura MVC, estructurando el código para mejorar la mantenibilidad y escalabilidad del proyecto.']
    },
    {
      title: 'Pasantía en Operaciones - IT',
      company: 'HIAS',
      period: 'Mar-Ago 2023',
      img: 'hias.webp',
      description: ['Mantenimiento preventivo y correctivo de equipos y programas informáticos.',
        'Brindé soporte técnico a colegas, configurando laptops, tarjetas de entrada, cámaras de videovigilancia e impresoras, garantizando un entorno de trabajo eficiente.',
        'Contribuí al flujo de trabajo al crear un software personalizado que generaba documentos de mantenimiento de laptops, mejorando la trazabilidad y el registro de actividades.']
    },
    {
      title: 'Pasantía en Sistemas',
      company: 'COMWARE',
      period: 'Sept-Oct 2017',
      img: 'comware.webp',
      description: ['Mantenimiento preventivo y correctivo de equipos y programas informáticos.',
        'Apoyo técnico a los usuarios internos en cuestiones relacionadas con sus equipos y dispositivos.']
    }
  ]

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const name = params.get('id');
      this.experience = this.experiences.find(exp => exp.company.toLowerCase() === name?.toLowerCase())
    })
  }
}
