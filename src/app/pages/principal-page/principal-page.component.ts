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
        img: 'bootstrap-original.svg',
        name: 'Bootstrap',
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
        img: 'json-original.svg',
        name: 'Json',
      },
      {
        img: 'nodejs-plain.svg',
        name: 'Nodejs',
      },
      {
        img: 'npm-original-wordmark.svg',
        name: 'Npm',
      },
      {
        img: 'rxjs-original.svg',
        name: 'Rxjs',
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
        img: 'markdown-original.svg',
        name: 'Markdown',
      },
      {
        img: 'vercel-original-wordmark.svg',
        name: 'Vercel',
      },
      {
        img: 'postman-original.svg',
        name: 'Postman',
      },
      {
        img: 'vscode-original.svg',
        name: 'Vscode',
      },
    ]

    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
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
