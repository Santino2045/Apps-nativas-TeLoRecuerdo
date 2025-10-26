import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule, IonContent } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-compra-medicamento',
  templateUrl: './compra-medicamento.component.html',
  styleUrls: ['./compra-medicamento.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule]
})
export class CompraMedicamentoComponent  implements OnInit {
  @ViewChild(IonContent, { static: false }) content?: IonContent;
  // Búsqueda
  query: string = '';

  // Paginación
  currentPage: number = 1;
  totalPages: number = 56;
  pagesToShow: number[] = [1, 2, 3, 4, 5, 6];

  // Productos de ejemplo. Reemplaza/edita este arreglo con tus datos (nombre, imagen y cantidad restante)
  products: Array<{ name: string; image: string; remaining?: number; note?: string }> = [
    // Ejemplos (puedes borrar y dejar vacío para cargar desde backend)
    { name: 'ASEPTOBRON ANTIGRIPAL FORTE', image: 'assets/icon/medical.svg', remaining: 3 },
    { name: 'BUSCAPINA FEM', image: 'assets/icon/medical.svg', remaining: 0 },
    { name: 'CEFALEX VL', image: 'assets/icon/medical.svg', remaining: 10 },
    { name: 'ACTRON PEDIATRICO', image: 'assets/icon/medical.svg', remaining: 2 },
  ];

  constructor() { }

  ngOnInit() {}

  get filteredProducts() {
    const q = this.query.trim().toLowerCase();
    if (!q) return this.products;
    return this.products.filter(p => p.name.toLowerCase().includes(q));
  }

  getBadgeText(p: { remaining?: number; note?: string }) {
    if (p.note) return p.note;
    if (p.remaining === 0) return 'Sin stock';
    if (p.remaining === 1) return 'Queda 1 pastilla';
    if (typeof p.remaining === 'number' && p.remaining > 1) return `Quedan ${p.remaining} pastillas`;
    return null;
  }

  getBadgeColor(p: { remaining?: number; note?: string }) {
    if (p.note) return 'warning';
    if (typeof p.remaining === 'number' && p.remaining <= 3) return 'danger';
    return 'tertiary';
  }

  goToPage(n: number) {
    if (n < 1 || n > this.totalPages) return;
    this.currentPage = n;
    // Aquí podrías llamar a un servicio para cargar la página n desde backend
  }

  scrollToTop() {
    this.content?.scrollToTop(400);
  }

  scrollToBottom() {
    this.content?.scrollToBottom(400);
  }
}
