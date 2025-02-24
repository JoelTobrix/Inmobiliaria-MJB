import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
})
export class RegistroPage implements OnInit {

  constructor() { }

  txt_usuario:string="";
  txt_nombre:string="";
  pass_password:string="";
  txt_correo:string="";
  txt_descripcion:string="";
  activo: boolean = false; 

  ngOnInit() {
  }

}
