import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RegistroPage } from '../registro/registro.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
txt_usuario:string="";
pass_password:string="";

  constructor(private modalCtrl: ModalController) {}

  EliminarCasillas(){
    this.txt_usuario="";
    this.pass_password="";
  }



  async registro(){
    const modal= await this.modalCtrl.create({
      component: RegistroPage
    }); return await modal.present();
  }


}
