import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MATERIAL
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


// FONT-AWESOME
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SiteOutilsComponent } from './site-outils/site-outils.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SiteOutilsComponent
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

    // ROUTE NAVIGATION
    RouterModule.forRoot([

      { path: "/", component: AppComponent },
      { path: "/", component: NavbarComponent },
      { path: "/site-outils", component: SiteOutilsComponent }

    ]),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
