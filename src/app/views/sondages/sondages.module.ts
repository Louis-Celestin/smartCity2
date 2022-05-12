import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { SondagesRoutingModule } from './sondages-routing.module';
// import { AjoutSondageComponent } from './ajout-sondage/ajout-sondage.component';
import { IconModule } from '@coreui/icons-angular';
import { ListeSondagesComponent } from './liste-sondages/liste-sondages.component';
import { MesSondagesComponent } from './mes-sondages/mes-sondages.component';
import { DetailSondageComponent } from './detail-sondage/detail-sondage.component';
import 'material-icons/iconfont/material-icons.css';
import { AjouterSondagesComponent } from './ajouter-sondages/ajouter-sondages.component';

@NgModule({
  declarations: [
    ListeSondagesComponent,
    MesSondagesComponent,
    DetailSondageComponent,
    AjouterSondagesComponent
  ],
  imports: [
    CommonModule,
    SondagesRoutingModule,
    ReactiveFormsModule,
    DocsComponentsModule,
    FormsModule

  ]
})
export class SondagesModule { }
