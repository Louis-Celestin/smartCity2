import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateursRoutingModule } from './utilisateurs-routing.module';
import { AjoutUtilisateursComponent } from './ajout-utilisateurs/ajout-utilisateurs.component';
import { ListeUtilisateursComponent } from './liste-utilisateurs/liste-utilisateurs.component';
import { DetailsUtilisateursComponent } from './details-utilisateurs/details-utilisateurs.component';
import { ModifierUtilisateursComponent } from './modifier-utilisateurs/modifier-utilisateurs.component';


@NgModule({
  declarations: [
    AjoutUtilisateursComponent,
    ListeUtilisateursComponent,
    DetailsUtilisateursComponent,
    ModifierUtilisateursComponent
  ],
  imports: [
    CommonModule,
    UtilisateursRoutingModule
  ]
})
export class UtilisateursModule { }
