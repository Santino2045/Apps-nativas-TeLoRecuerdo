import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-credencial.obra.social',
  templateUrl: './credencial-obra-social.page.html',
  styleUrls: ['./credencial-obra-social.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CredencialObraSocialPage {
  imagenCredencial: string | ArrayBuffer | null = null;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenCredencial = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}