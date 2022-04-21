import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AbsencesenseiComponent } from './components/absencesensei/absencesensei.component';
import { AbsencesetudComponent } from './components/absencesetud/absencesetud.component';
import { AjouterenseignantComponent } from './components/ajouterenseignant/ajouterenseignant.component';
import { AjouteretudiantComponent } from './components/ajouteretudiant/ajouteretudiant.component';
import { ChoisirTacheComponent } from './components/choisir-tache/choisir-tache.component';
import { EnseignantComponent } from './components/enseignant/enseignant.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { LoginComponent } from './components/login/login.component';
import { TachePersonneComponent } from './components/tache-personne/tache-personne.component';
import { TacheComponent } from './components/tache/tache.component';

const routes: Routes = [
  {path : "enseignants" , component : EnseignantComponent},
  {path : "etudiants" , component : EtudiantComponent},
  {path : "ajouterabsetud" , component : AjouteretudiantComponent},
  {path : "ajouterabsensei" , component : AjouterenseignantComponent},
  {path : "absensesetud" , component : AbsencesetudComponent},
  {path : "absensesensei" , component : AbsencesenseiComponent},
  {path : "choisir" , component : ChoisirTacheComponent},
  {path : "tache" , component : TacheComponent},
  {path : "tachepersonne" , component : TachePersonneComponent},
  {path : "login" , component : LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
