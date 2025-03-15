import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  standalone: false,
})
export class AdminPage implements OnInit {
  email_correo: string="";
  pass: string="";
  
  constructor(private modalCtrl: ModalController, private http: HttpClient, private router: Router) { }

  cerrarModal(){
  this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

  LogAdmin(){
    const datos = {
      correo: this.email_correo,
      contrasenia: this.pass,
    };

    this.http.post('http://localhost/inmobiliaria/iniciar_admin.php', datos).subscribe(
      (response: any) => {
        console.log('Respuesta del servidor:', response);
        if (response.success) {
          alert('Bienvenido ');
          this.router.navigate(['/inmobiliariaAdmin']); //Direccion 
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


