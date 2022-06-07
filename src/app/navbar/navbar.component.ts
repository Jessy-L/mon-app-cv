import { Component, OnInit } from '@angular/core';
import { faBars, faCode, faHouse, faQuestion, faWrench } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  pageToolbar = "Page Accueil";
  appName = "Jessy Landas"

  toolbarIcon = faBars

  iconLink1 = faHouse
  iconLink2 = faQuestion
  iconLink3 = faCode
  iconLink4 = faWrench

  hrefImg1 = "#"
  srcSN1  = "../assets/images/logo-social-network/instagram.svg"
  altImg1 = "Logo cliquable instagram"

  hrefImg2 = "#"
  srcSN2  = "../assets/images/logo-social-network/linkedin.svg"
  altImg2 = "Logo cliquable instagram"

  hrefImg3 = "#"
  srcSN3  = "../assets/images/logo-social-network/github.svg"
  altImg3 = "Logo cliquable instagram"

  constructor() { }

  ngOnInit(): void {



  }



}
