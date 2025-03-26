import { Component, OnInit } from '@angular/core';
import { AdminusuariosPageModule } from './adminusuarios.module';
<<<<<<< HEAD
=======
import { ModalController } from '@ionic/angular';
import { RegistroPage } from '../registro/registro.page';
>>>>>>> 0e335c1 (Diseño muestra de usuarios)

@Component({
  selector: 'app-adminusuarios',
  templateUrl: './adminusuarios.page.html',
  styleUrls: ['./adminusuarios.page.scss'],
  standalone: false,
})
export class AdminusuariosPage implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  constructor(private modalCtrl: ModalController) { }
  
  async Registro(){
      const modal= await this.modalCtrl.create({
        component: RegistroPage
      }); return await modal.present();
    }
>>>>>>> 0e335c1 (Diseño muestra de usuarios)

  ngOnInit() {
  }

}
