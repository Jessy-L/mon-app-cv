import { Component, ElementRef, OnInit } from '@angular/core';
import * as data from "../../assets/data/site-outils.json";

@Component({
  selector: 'app-site-outils',
  templateUrl: './site-outils.component.html',
  styleUrls: ['./site-outils.component.scss']
})
export class SiteOutilsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    Object.values(data).forEach(site => {

      let contentCard = document.getElementById('cardContent') as HTMLElement;
      let div = document.createElement('div')

      div.innerHTML = `

        <p>${site[0]}</p>
        <p>${site[1]}</p>
        <p>${site[2]}</p>
        <p>${site[3]}</p>
        
      `
      contentCard.appendChild(div)
      
    })

  }

}

