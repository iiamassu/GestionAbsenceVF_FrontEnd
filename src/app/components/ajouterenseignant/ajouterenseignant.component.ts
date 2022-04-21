import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { absence } from 'src/app/model/absence';
import { Personne } from 'src/app/model/Personne';
import { Tache } from 'src/app/model/Tache';
import { AbsenceService } from 'src/app/services/absence.service';
@Component({
  selector: 'app-ajouterenseignant',
  templateUrl: './ajouterenseignant.component.html',
  styleUrls: ['./ajouterenseignant.component.css']
})
export class AjouterenseignantComponent implements OnInit {

  constructor(private route : ActivatedRoute,private service :AbsenceService,private route2:Router) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params:any)=>{
      this.nom = params.nom
      this.personne.mat=params.data;
    });
  }
  nom !: any;
  message:any;
  mat!:string;
  id:number=0; // This is a default ID for tache
  personne:Personne = new Personne(this.mat);
  tache:Tache = new Tache(this.id);
  abs:absence = new absence("","00:00","00:00","",this.personne,this.tache);

  insert()
  {
    let r;
     let res =this.service.insertAbsence(this.abs);
     res.subscribe(
       data => r = data
     )
    console.log(this.abs);
    console.log('reponse: '+ r);
    this.route2.navigate(['/enseignants']);

  }

}
