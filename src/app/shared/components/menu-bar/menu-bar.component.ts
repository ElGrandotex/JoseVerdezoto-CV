import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { WheaterService } from '../../wheater.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent implements OnInit{

  items: MenuItem[] | undefined;
  temperatura?: any
  constructor(
    private whaterSrv: WheaterService
  ){}

  ngOnInit(): void {
      this.items = [
        {
          label: 'Principal',
          icon: 'pi pi-home',
          routerLink: './'
        },
        {
          label: 'Educación',
          icon: 'pi pi-graduation-cap',
          routerLink: './educacion'
        },
        {
          label: 'Experiencia',
          icon: 'pi pi-briefcase',
          items: [
            {
              label: 'RCB Trace',
              routerLink: './experiencia/RCB',
            },
            {
              label: 'Produbanco',
              routerLink: './experiencia/Produbanco',
            },
            {
              label: 'HIAS',
              routerLink: './experiencia/HIAS',
            },
            {
              label: 'Comware S.A',
              routerLink: './experiencia/Comware',
            },
          ]
        },
        {
          label: 'Referencias',
          icon: 'pi pi-users',
          routerLink: './referencias'
        },
        {
          label: 'Certificados',
          icon: 'pi pi-book',
          routerLink: './certificados'
        },
        {
          label: 'Contacto',
          icon: 'pi pi-phone',
          routerLink: './contacto'
        },
      ]

      this.whaterSrv.obtenerTemperatura()
        .subscribe(
          res => {
            this.temperatura = res
          }
        )
  }
}
