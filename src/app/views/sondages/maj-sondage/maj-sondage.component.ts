import { Component, OnInit } from '@angular/core';
import { SondageService } from '../sondage.service';
import { Sondage } from '../sondage.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-maj-sondage',
  templateUrl: './maj-sondage.component.html',
  styleUrls: ['./maj-sondage.component.scss']
})
export class MajSondageComponent implements OnInit {

  id?:number;
  sondage: Sondage = new Sondage();


  constructor(private sondageService: SondageService, private , private route: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

}
