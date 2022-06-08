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

    // (document.getElementById('btnFiltreProjet') as HTMLButtonElement).click()

    Object.values(data).forEach(site => {

      if(site.length != undefined){

        let contentCard = document.getElementById('cardContent') as HTMLElement;
        let div = document.createElement('div')

        div.innerHTML = `

        <div class="card m-4 box-shadows-custom site-outils" data-filtre="${site[0]}">
          <h5 class="card-header bg-light text-dark">${site[2]}</h5>
          <div class="card-body">
            <p class="card-text">${site[3]}</p>
            <a href="${site[1]}" target="_blank" class="btn btn-custom-color">VOIR</a>
          </div>
        </div>


        `
        contentCard.appendChild(div)
      }


    })

  }


  filtre(btn : any){

    [].forEach.call(

      document.getElementsByClassName('site-outils') as HTMLCollection,

      (el) => {

        var filtreDiv = (((el as HTMLDivElement).dataset) as DOMStringMap)['filtre']

        if(btn.dataset.projet != filtreDiv && btn.dataset.projet != "all")
          (el as HTMLDivElement).classList.add('d-none')
        else
          (el as HTMLDivElement).classList.remove('d-none')

      }

    )

  }

}

