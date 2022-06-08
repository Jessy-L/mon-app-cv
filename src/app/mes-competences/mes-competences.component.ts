import { Component, OnInit } from '@angular/core';
import * as data from "../../assets/data/competence.json";

@Component({
  selector: 'app-mes-competences',
  templateUrl: './mes-competences.component.html',
  styleUrls: ['./mes-competences.component.scss']
})
export class MesCompetencesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    Object.values(data).forEach(competence => {

      if(competence.id != undefined){

        let imgLink = "../assets/images/logo-langages/" + (competence.name).toLocaleLowerCase() + ".svg";

        let contentCompetence = document.getElementById('content-competence') as HTMLElement;

        let div = document.createElement('div')

        div.innerHTML = `

          <a href="competence/${competence.id}" class="rounded-circle">
            <img src="${imgLink}" alt="${competence.name}">
          </a>

        `
        contentCompetence.appendChild(div)

      }

    })

  }

}
