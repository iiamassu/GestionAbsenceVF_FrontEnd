import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbsenceService } from 'src/app/services/absence.service';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit {

  constructor(private service:TacheService, private route:ActivatedRoute, ) { }
  tache:any;
  id!:number;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any)=>{
      this.id=params.index;
      this.service.setId(params.index);
    });

      this.service.getTache().subscribe(data=>{
      this.tache = data;
    })
    console.log("tache: "+this.tache);
  }

}
