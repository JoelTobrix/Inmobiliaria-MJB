import { Component, OnInit } from '@angular/core';
import { AccesoService } from '../servicio/acceso.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
})
export class RegistroPage implements OnInit {

  constructor( private servicio: AccesoService, private modalCtrl: ModalController) { }

  txt_usuario:string="";
  txt_nombre:string="";
  pass_password:string="";
  txt_correo:string="";
  txt_descripcion:string="";
  activo: boolean = false; 

  ngOnInit() {
  }
  Registrar(){
    if(this.txt_usuario!="" && this.txt_nombre!="" && this.pass_password!="" && this.txt_correo!="" && this.txt_descripcion!="" && this.activo){
    let datos={
      accion: 'cuenta',
      "usuario": this.txt_usuario,
      "nombre": this.txt_nombre,
      "pass": this.pass_password,
      "correo": this.txt_correo,
      "descripcion": this.txt_descripcion,
       activo: this.activo
    }
    this.servicio.postData(datos).subscribe((res:any)=>{
      if(res.estado){
         this.servicio.showToast(res.mensaje, 3000);
         this.modalCtrl.dismiss();
      }else{
        this.servicio.showToast(res.mensaje, 3000);
      }
    });

    }
  }
  
  passwordStrength: number = 0;

calcularFuerzaClave() {
  const password = this.pass_password || "";
  let strength = 0;

  if (password.length >= 6) strength += 25;
  if (password.match(/[a-z]/)) strength += 25;
  if (password.match(/[A-Z]/)) strength += 25;
  if (password.match(/[0-9]/)) strength += 15;
  if (password.match(/[\W]/)) strength += 10;

  this.passwordStrength = Math.min(strength, 100); // Evita valores mayores a 100
}

getPasswordStrengthLabel(): string {
  if (this.passwordStrength < 40) return "Baja";
  if (this.passwordStrength < 80) return "Media";
  if (this.passwordStrength < 80) return "Alta";
  return "Alta";
}



}
