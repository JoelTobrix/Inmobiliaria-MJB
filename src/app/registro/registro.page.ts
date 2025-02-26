import { Component, OnInit } from '@angular/core';
import { AccesoService } from '../servicio/acceso.service';
import { ModalController } from '@ionic/angular';
import { v4 as uuidv4 } from 'uuid';
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
    if(this.txt_usuario && this.txt_nombre && this.pass_password && this.txt_correo && this.txt_descripcion){
      let datos = {
        IdUsuario: uuidv4(),
        usuario: this.txt_usuario,
        nombre: this.txt_nombre,
        pass: this.pass_password,
        correo: this.txt_correo,
        descripcion: this.txt_descripcion,
        activo: this.activo ? 1 : 0 // Convertir a 0 o 1
      };
  
      this.servicio.postData(datos).subscribe((res: any) => {
        this.servicio.showToast(res.mensaje, 3000);
        if(res.estado){
          this.modalCtrl.dismiss();
        }
      }, error => {
        this.servicio.showToast("Error en la conexión", 3000);
      });
    } else {
      this.servicio.showToast("Todos los campos son obligatorios", 3000);
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
