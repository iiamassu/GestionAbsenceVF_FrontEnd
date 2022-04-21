import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbsenceService } from 'src/app/services/absence.service';

@Component({
  selector: 'app-absencesetud',
  templateUrl: './absencesetud.component.html',
  styleUrls: ['./absencesetud.component.css']
})
export class AbsencesetudComponent implements OnInit {


  nom !: string;
  constructor(private route : ActivatedRoute,private service : AbsenceService) { }
  etudiant:any;
  ngOnInit(): void {
    this.service.getAbsence().subscribe(data=>{
      this.etudiant = data;
    });

    this.route.queryParams.subscribe((params:any)=>{
      //console.log(params)
      this.nom = params.nom
      this.service.setMat(params.mat);
    });
    console.log(this.etudiant);

  }

}
