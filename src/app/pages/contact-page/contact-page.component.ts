import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Enveloop } from 'enveloop'
import { EnveloopService } from '../../shared/enveloop.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent implements OnInit{
  public templates: any[] = []
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  public contactForm: FormGroup = this.fb.group({
    asunto: new FormControl<string>('', [Validators.required]),
    descripcion: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.pattern(this.emailPattern)]),
    nombre: new FormControl<string>('', [Validators.required, Validators.minLength(6)]),
    numero: new FormControl<string>('', [Validators.required, Validators.minLength(10)])
  })

  constructor(
    private fb: FormBuilder,
    private enveloopSrv: EnveloopService
  ) { }

  ngOnInit(): void {
  }

  sendEmail() {
    const asunto: string = this.contactForm.controls['asunto'].value
    const descripcion: string = this.contactForm.controls['descripcion'].value
    const email: string = this.contactForm.controls['email'].value
    const nombre: string = this.contactForm.controls['nombre'].value
    const numero: string = this.contactForm.controls['numero'].value
    const data = {
      "to": "jose.verdezoto01@epn.edu.ec",
      "from": "jose.verdezoto01@epn.edu.ec",
      "subject": asunto,
      "template": "contact",
      "templateVariables": {
        "asunto": asunto,
        "descripcion": descripcion,
        "email": email,
        "nombre": nombre,
        "numero": numero
      }
    }

    this.enveloopSrv.sendEmail(data).subscribe(
      res => {
        console.log('Enviado', res);
      },
      error => {
        console.log('Error :c ', error);

      }
    )
  }

}
