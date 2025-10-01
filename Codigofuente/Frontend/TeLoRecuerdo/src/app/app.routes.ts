import { Routes } from '@angular/router';
import { PaginaInicioComponent } from './componentes/pagina-inicio/pagina-inicio.component';
import { ContactoMedicoComponent } from './componentes/contactomedico/contactomedico.component';
import { ContactoFamiliaComponent } from './componentes/contactofamilia/contactofamilia.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { CalendarioComponent } from './componentes/calendario/calendario.component';

export const routes: Routes = [
  { path: '', component: PaginaInicioComponent },
  { path: 'contacto-medico', component: ContactoMedicoComponent },
  { path: 'contacto-familia', component: ContactoFamiliaComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'calendario', component: CalendarioComponent },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then(m => m.PerfilPage)
  },
  {
    path: 'credencial-obra-social',
    loadComponent: () => import('./credencial-obra-social/credencial-obra-social.page').then(m => m.CredencialObraSocialPage)
  },
];