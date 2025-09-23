import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.scss'],
  imports:[IonicModule]
})
export class PaginaInicioComponent {
  fechaHoy: string;

  constructor(private navCtrl: NavController) {
    const hoy = new Date();
    this.fechaHoy = hoy.toLocaleDateString();
  }

  irAMedicamentos() {
    this.navCtrl.navigateForward('/tab1');
  }

  contactarMedico() {
    this.navCtrl.navigateForward('/tab2');
  }

  comprarMedicamentos() {
    this.navCtrl.navigateForward('/tab3');
  }

  contactarFamiliar() {
    this.navCtrl.navigateForward('/tab4');
  }

  enviarSOS() {
    alert('SOS enviado');
  }
}