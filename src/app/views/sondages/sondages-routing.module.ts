import { AjouterSondagesComponent } from './ajouter-sondages/ajouter-sondages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeSondagesComponent } from './liste-sondages/liste-sondages.component';
import { MesSondagesComponent } from './mes-sondages/mes-sondages.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Sondages'
    },
    children: [
      {
        path: '',
        redirectTo: 'ajouter-sondages'
      },
      {
        path: 'ajouter-sondages',
        component:AjouterSondagesComponent,
        data: {
          title: 'Ajouter un sondage'
        }
      },
      {
        path: 'mes-sondages',
        component: MesSondagesComponent,
        data: {
          title: 'Mes sondages'
        }
      },
      {
        path: 'liste-sondages',
        component: ListeSondagesComponent,
        data: {
          title: 'Liste des sondages'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SondagesRoutingModule { }
