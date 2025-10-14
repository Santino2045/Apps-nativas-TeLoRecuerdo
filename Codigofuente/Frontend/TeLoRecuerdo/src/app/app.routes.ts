import { Routes } from '@angular/router';
import { PaginaInicioComponent } from './Componentes/pagina-inicio/pagina-inicio.component';
import { ContactoMedicoComponent } from './Componentes/contacto-medico/contactomedico.component';
import { ContactoFamiliaComponent } from './Componentes/contacto-familia/contactofamilia.component';
import { ProductosComponent } from './Componentes/productos/productos.component';
import { CalendarioComponent } from './Componentes/calendario/calendario.component';
import { NuevoMedicamentoComponent } from './Componentes/nuevo-medicamento/nuevo-medicamento.component';

export const routes: Routes = [
  { path: '', component: PaginaInicioComponent },
  { path: 'contacto-medico', component: ContactoMedicoComponent },
  { path: 'contacto-familia', component: ContactoFamiliaComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'nuevo-medicamento', component: NuevoMedicamentoComponent },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then(m => m.PerfilPage)
  },
  {
    path: 'credencial-obra-social',
    loadComponent: () => import('./credencial-obra-social/credencial-obra-social.page').then(m => m.CredencialObraSocialPage)
  },
];