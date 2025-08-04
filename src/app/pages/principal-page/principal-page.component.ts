import { Component, OnInit } from '@angular/core';
import { ToolInterface } from '../../interfaces/tool.interface';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrl: './principal-page.component.css'
})
export class PrincipalPageComponent implements OnInit{

  public tools!: ToolInterface[];
  public url: string = '/assets/tools/'
  responsiveOptions: any[] | undefined;

  ngOnInit(): void {
    this.tools = [
      {
        img: 'typescript-original.svg',
        name: 'Typescript',
      },
      {
        img: 'angular-original.svg',
        name: 'Angular',
      },
      {
        img: 'angularmaterial-original.svg',
        name: 'Angular Material',
      },
      {
        img: 'flutter-original.svg',
        name: 'Flutter',
      },
      {
        img: 'laravel-original.svg',
        name: 'Laravel',
      },
      {
        img: 'nestjs-original.svg',
        name: 'NestJS',
      },
      {
        img: 'react-original.svg',
        name: 'React',
      },
      {
        img: 'bootstrap-original.svg',
        name: 'Bootstrap',
      },
      {
        img: 'spring-original.svg',
        name: 'Spring',
      },
      {
        img: 'html5-original.svg',
        name: 'Html5',
      },
      {
        img: 'css3-original.svg',
        name: 'Css3',
      },
      {
        img: 'postgresql-original.svg',
        name: 'PostgreSQL',
      },
      {
        img: 'github-original.svg',
        name: 'Github',
      },
      {
        img: 'figma-original.svg',
        name: 'Figma',
      },
      {
        img: 'postman-original.svg',
        name: 'Postman',
      },
    ]

    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 3,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

}
