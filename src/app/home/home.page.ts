import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RegistroPage } from '../registro/registro.page';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AdminPage } from '../admin/admin.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
txt_usuario:string="";
pass_password:string="";
  
  

  constructor(private modalCtrl: ModalController, private http: HttpClient, private router: Router) {}

  EliminarCasillas(){
    this.txt_usuario="";
    this.pass_password="";
  }

  async ingresarAdmin(){
    const modal=await this.modalCtrl.create({
    component: AdminPage
    }); return await modal.present();
  }

  async registro(){
    const modal= await this.modalCtrl.create({
      component: RegistroPage
    }); return await modal.present();
  }

  login() {
    const datos = {
      usuario: this.txt_usuario,
      contrasenia: this.pass_password,
    };

    this.http.post('http://localhost/inmobiliaria/iniciar_sesion.php', datos).subscribe(
      (response: any) => {
        console.log('Respuesta del servidor:', response);
        if (response.success) {
          alert('Bienvenido ' + this.txt_usuario);
          this.router.navigate(['/inmobiliaria']); //Direccion a la pagina inmobiliaria
        } else {
          alert('Error: ' + response.message);
        }
      },
      (error: any) => {
        console.error('Error en la petición:', error);
        alert('No se pudo conectar con el servidor');
      }
    );
  }
}


