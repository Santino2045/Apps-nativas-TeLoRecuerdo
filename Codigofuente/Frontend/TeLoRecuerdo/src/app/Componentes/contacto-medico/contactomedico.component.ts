import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contacto-medico',
  templateUrl: './contactomedico.component.html',
  styleUrls: ['./contactomedico.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule]
})
export class ContactoMedicoComponent {}