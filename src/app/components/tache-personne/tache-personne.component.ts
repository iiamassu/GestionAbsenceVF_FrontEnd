import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-tache-personne',
  templateUrl: './tache-personne.component.html',
  styleUrls: ['./tache-personne.component.css']
})
export class TachePersonneComponent implements OnInit {
  mat!:string;
  id!:number;
  absence:any;
  constructor(private service:TacheService, private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any)=>{
      this.id=params.index;
      this.mat=params.mat;
      this.service.setId(params.index);
      this.service.setMat(params.mat)
    });

      this.service.getTachePersonne().subscribe(data=>{
        this.absence=data
    })
    console.log(this.mat);
    console.log(this.id);
    //console.log("absence "+(this.absence)==undefined);
  }

}
