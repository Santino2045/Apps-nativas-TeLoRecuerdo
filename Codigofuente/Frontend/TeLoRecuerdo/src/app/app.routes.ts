import { Routes } from '@angular/router';
import { PaginaInicioComponent } from './Componentes/pagina-inicio/pagina-inicio.component';
import { ContactomedicoComponent } from './Componentes/contactomedico/contactomedico.component';
import { ContactofamiliaComponent } from './Componentes/contactofamilia/contactofamilia.component';
import { ProductosComponent } from './Componentes/productos/productos.component';
import { CalendarioComponent } from './Componentes/calendario/calendario.component';

export const routes: Routes = [
  { path: '', component: PaginaInicioComponent },
  { path: 'contacto-medico', component: ContactomedicoComponent },
  { path: 'contacto-familia', component: ContactofamiliaComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'calendario', component: CalendarioComponent },
];