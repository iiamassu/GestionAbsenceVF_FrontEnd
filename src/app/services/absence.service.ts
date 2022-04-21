import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { absence } from '../model/absence';
import { Personne } from '../model/Personne';
import { Tache } from '../model/Tache';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  constructor(private http : HttpClient) { }
  mat!:string;

  getAbsence() : Observable<object>
  {
    return this.http.get("http://localhost:8050/list/"+this.mat);
  }
  setMat(mat:string){
    this.mat=mat;
  }
  insertAbsence(absence: absence){
     return this.http.post("http://localhost:8050/insert",absence,{responseType: 'text' as 'json'});
  }

}
