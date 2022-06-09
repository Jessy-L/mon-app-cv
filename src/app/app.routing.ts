import { RouterModule, Routes } from "@angular/router";
import { AProposComponent } from "./a-propos/a-propos.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { AppComponent } from "./app.component";
import { CompetenceComponent } from "./competence/competence.component";
import { MesCompetencesComponent } from "./mes-competences/mes-competences.component";
import { MesLangagesComponent } from "./mes-langages/mes-langages.component";
import { SiteOutilsComponent } from "./site-outils/site-outils.component";

const APP_ROUTING : Routes = [

  { path: '', component: AProposComponent },
  { path: 'site-outils', component: SiteOutilsComponent },
  { path: 'mes-competences', component: MesCompetencesComponent },
  { path: 'competence/:id', component: CompetenceComponent },
  // { path: 'a-propos', component: AProposComponent },

];


export const ROUTING = RouterModule.forRoot(APP_ROUTING)
