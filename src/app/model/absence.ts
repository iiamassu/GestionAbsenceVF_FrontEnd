import { Personne } from "./Personne";
import { Tache } from "./Tache";

export class absence{
    date!:string;
    heure_debut!:string;
    heure_fin!:string;
    motif!:string;
    personne!:Personne;
    tache!:Tache;
  constructor(
    date:string,
    heure_debut:string,
    heure_fin:string,
    motif:string,
    personne:Personne,
    tache:Tache
  )
  {
    this.date=date;
    this.heure_debut=heure_debut;
    this.heure_fin=heure_fin;
    this.motif=motif;
    this.personne=personne;
    this.tache=tache;
  }


}
