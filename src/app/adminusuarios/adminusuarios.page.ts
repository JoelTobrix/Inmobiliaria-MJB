import { Component, OnInit } from '@angular/core';
import { AdminusuariosPageModule } from './adminusuarios.module';
import { ModalController } from '@ionic/angular';
import { RegistroPage } from '../registro/registro.page';

@Component({
  selector: 'app-adminusuarios',
  templateUrl: './adminusuarios.page.html',
  styleUrls: ['./adminusuarios.page.scss'],
  standalone: false,
})
export class AdminusuariosPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }
  
  async Registro(){
    const modal= await this.modalCtrl.create({
      component: RegistroPage
    }); return await modal.present();
  }
  ngOnInit() {
  }

}
