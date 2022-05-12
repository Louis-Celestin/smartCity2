import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemesRoutingModule } from './problemes-routing.module';
import { ListeProblemesComponent } from './liste-problemes/liste-problemes.component';


@NgModule({
  declarations: [
    ListeProblemesComponent
  ],
  imports: [
    CommonModule,
    ProblemesRoutingModule
  ]
})
export class ProblemesModule { }
