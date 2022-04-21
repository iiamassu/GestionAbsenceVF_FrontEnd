import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-choisir-tache',
  templateUrl: './choisir-tache.component.html',
  styleUrls: ['./choisir-tache.component.css']
})
export class ChoisirTacheComponent implements OnInit {

  constructor(private route:Router , private service:TacheService) { }
  index1:number=0;
  index2:number=0;
  mat!:string;
  ngOnInit(): void {
  }
  choisir(index1:number){
    this.route.navigate(['/tache'],{queryParams : {index:index1}});
  }
  choisir2(index2:number,mat:string){
    this.route.navigate(['/tachepersonne'],{queryParams : {index:index2, mat:mat}});
  }
}
