import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonIcon,
    CommonModule,
    FormsModule,
    RouterModule // Importante para routerLink
  ]
})
export class PerfilPage implements OnInit {
  nombreCompleto: string = 'Susana Pérez';
  edad: number = 68;
  genero: string = 'Femenino';
  tipoSangre: string = 'O+';

  constructor() { }

  ngOnInit() {
    // Aquí podrías cargar los datos del usuario si vienen de un servicio
  }
}