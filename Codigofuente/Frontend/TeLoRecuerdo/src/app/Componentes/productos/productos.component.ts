import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class ProductosComponent {
  busqueda: string = '';
  productos: any[] = [];

  constructor(private http: HttpClient) {}

  buscarProductos(medicamento: string) {
    const sellerId = 334353344; // Farmacias Selma
    const url = `https://api.mercadolibre.com/sites/MLA/search?seller_id=${sellerId}&q=${medicamento}`;
    this.http.get(url).subscribe((res: any) => {
      this.productos = res.results;
    });
  }
}