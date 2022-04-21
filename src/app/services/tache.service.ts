import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private http:HttpClient) { }
  id!:number;
  mat!:string
  setId(id:number){
    this.id=id;
  }
  setMat(mat:string){
    this.mat=mat;
  }
  getTache() : Observable<object>
  {
    console.log('Id: '+this.id)
    console.log("service: "+this.http.get("http://localhost:8050/tache/"+this.id));
    return this.http.get("http://localhost:8050/tache/"+this.id);
  }

  getTachePersonne() : Observable<object>
  {
    console.log('Id: '+this.id)
    console.log("service: "+this.http.get("http://localhost:8050/tachepersonne/"+"/"+this.mat+"/"+this.id));
    return this.http.get("http://localhost:8050/tache/"+this.id);
  }
}
