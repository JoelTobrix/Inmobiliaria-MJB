import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {
  private apiUrl = "http://localhost/Inmobiliaria/usuarios.php"; // API

  constructor(private http: HttpClient, private toastController: ToastController) {}

  // Método para enviar datos al backend
  postData(datos: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/registro.php`, datos);
  }

  // Método para mostrar mensajes emergentes (toasts)
  async showToast(mensaje: string, duracion: number = 2000) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: duracion,
      position: 'bottom'
    });
    await toast.present();
  }
}
