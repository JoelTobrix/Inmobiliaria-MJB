import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AccesoService {
  private apiUrl = "http://localhost/Inmobiliaria/usuarios.php"; // API correcta

  constructor(private http: HttpClient, private toastController: ToastController) {}

  // Método para enviar datos al backend
  postData(datos: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, JSON.stringify(datos), { headers });
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
