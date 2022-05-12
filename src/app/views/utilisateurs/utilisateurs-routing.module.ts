import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutUtilisateursComponent } from './ajout-utilisateurs/ajout-utilisateurs.component';
import { ListeUtilisateursComponent } from './liste-utilisateurs/liste-utilisateurs.component';

const routes: Routes = [

  {
    path: '',
    data: {
      title: 'Utilisateurs'
    },
    children: [
      {
        path: '',
        redirectTo: 'ajout-utilisateurs'
      },
      {
        path: 'ajout-utilisateurs',
        component:AjoutUtilisateursComponent,
        data: {
          title: 'Mes sondages'
        }
      },
      {
        path: 'liste-utilisateurs',
        component: ListeUtilisateursComponent,
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
export class UtilisateursRoutingModule { }
