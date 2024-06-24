import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent implements OnInit{

  items: MenuItem[] | undefined;

  constructor(private router: Router){}

  ngOnInit(): void {
      this.items = [
        {
          label: 'Principal',
          icon: 'pi pi-home',
          routerLink: '/'
        },
        {
          label: 'Educación',
          icon: 'pi pi-graduation-cap',
          routerLink: '/educacion'
        },
        {
          label: 'Experiencia',
          icon: 'pi pi-briefcase',
          items: [
            {
              label: 'Comware S.A',
              routerLink: '/experiencia',
            },
            {
              label: 'HIAS',
              routerLink: '/experiencia',
            },
            {
              label: 'Produbanco',
              routerLink: '/experiencia',
            },
          ]
        },
        {
          label: 'Referencias',
          icon: 'pi pi-users',
          routerLink: '/referencias'
        },
        {
          label: 'Certificados',
          icon: 'pi pi-book',
          routerLink: '/certificados'
        },
        {
          label: 'Contacto',
          icon: 'pi pi-phone',
          routerLink: '/contacto'
        },
      ]
  }
}
