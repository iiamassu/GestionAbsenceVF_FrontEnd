import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnseignantComponent } from './components/enseignant/enseignant.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { AjouteretudiantComponent } from './components/ajouteretudiant/ajouteretudiant.component';
import { AjouterenseignantComponent } from './components/ajouterenseignant/ajouterenseignant.component';
import { AbsencesenseiComponent } from './components/absencesensei/absencesensei.component';
import { AbsencesetudComponent } from './components/absencesetud/absencesetud.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { TacheComponent } from './components/tache/tache.component';
import { ChoisirTacheComponent } from './components/choisir-tache/choisir-tache.component';
import { TachePersonneComponent } from './components/tache-personne/tache-personne.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    EnseignantComponent,
    EtudiantComponent,
    AjouteretudiantComponent,
    AjouterenseignantComponent,
    AbsencesenseiComponent,
    AbsencesetudComponent,
    HomeComponent,
    TacheComponent,
    ChoisirTacheComponent,
    TachePersonneComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
