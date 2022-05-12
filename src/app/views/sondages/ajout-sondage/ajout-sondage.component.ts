import { ListeSondagesComponent } from './../liste-sondages/liste-sondages.component';
import { Component, OnInit } from '@angular/core';
import { Sondage, User } from '../sondage.model';
import { SondageService } from '../sondage.service';
import { Router } from '@angular/router';
import { FormsModule, FormBuilder, FormArray, Validators } from '@angular/forms';
import 'material-icons/iconfont/material-icons.css';


@Component({
  selector: 'app-ajout-sondage',
  templateUrl: './ajout-sondage.component.html',
  styleUrls: ['./ajout-sondage.component.scss']
})
export class AjoutSondageComponent implements OnInit {

  // FormArray
  form = this.fb.group({
    options : this.fb.array([])
  });

  sondage: Sondage = new Sondage();

  constructor(private sondageService : SondageService, private router : Router, private fb:FormBuilder) { }

  get options(){
    return this.form.controls["options"] as FormArray;
  }

  // FormArray
  ajoutoption(){
      const optionForm = this.fb.group({
        libelle :['', Validators.required]
      });
      this.options.push(optionForm);
  }

  supprimeroption(optionIdex: number){
    this.options.removeAt(optionIdex);
  }
  // Fin FormArray

  saveSondage(){
    this.sondageService.createSondage(this.sondage).subscribe(data=>{
      console.log(data);
      this.goToSondageListe();
      return true;
    },error=>console.log(error));
    return false;
  }

  goToSondageListe(){
    this.router.navigateByUrl('/sondages/liste-sondages');
  }

  onSubmit(){
    if (this.saveSondage()){
      this.goToSondageListe();
    }
  }

  ngOnInit(): void {
  }

}
