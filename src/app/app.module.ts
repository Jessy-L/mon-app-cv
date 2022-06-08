import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MATERIAL
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider'
import { MatSidenavModule } from '@angular/material/sidenav';




// FONT-AWESOME
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { SiteOutilsComponent } from './site-outils/site-outils.component';
import { ROUTING } from './app.routing';
import { AProposComponent } from './a-propos/a-propos.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MesLangagesComponent } from './mes-langages/mes-langages.component';
import { MesCompetencesComponent } from './mes-competences/mes-competences.component';
import { CompetenceComponent } from './competence/competence.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SiteOutilsComponent,
    AProposComponent,
    AccueilComponent,
    MesLangagesComponent,
    MesCompetencesComponent,
    CompetenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,

    // MATERIAL
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    MatSidenavModule,
    

    // ROUTE NAVIGATION
    ROUTING


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
