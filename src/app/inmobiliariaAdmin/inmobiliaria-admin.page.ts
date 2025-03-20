import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inmobiliaria-admin',
  templateUrl: './inmobiliaria-admin.page.html',
  styleUrls: ['./inmobiliaria-admin.page.scss'],
  standalone: false,
})
export class InmobiliariaAdminPage implements OnInit {
  type_propetie: string="";
  price: string="";
  location: string="";

  constructor() { }

  ngOnInit() {
  }
  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      console.log("Imagen seleccionada:", file);
      // Aquí puedes manejar la imagen, como mostrarla o subirla a un servidor.
    }
  }
  

}
