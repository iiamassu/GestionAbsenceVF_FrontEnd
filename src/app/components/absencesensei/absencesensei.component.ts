import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbsenceService } from 'src/app/services/absence.service';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-absencesensei',
  templateUrl: './absencesensei.component.html',
  styleUrls: ['./absencesensei.component.css']
})
export class AbsencesenseiComponent implements OnInit {

  nom !: string;

  constructor(private route : ActivatedRoute,private service : AbsenceService) { }
  enseignants:any;
  mat!:string;
  ngOnInit(): void {
    this.service.getAbsence().subscribe(data=>{
      this.enseignants = data;
    });

    this.route.queryParams.subscribe((params:any)=>{
      //console.log(params)
      this.nom = params.nom
      this.service.setMat(params.mat);
    });
  }

}
