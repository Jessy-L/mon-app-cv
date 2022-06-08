import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as data from "../../assets/data/competence.json";


@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {

  id: any | null;

  constructor( private route: ActivatedRoute) {


    this.id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {

    let contentDetail = document.getElementById('content-detail') as HTMLElement;

    Object.values(data).forEach(competence => {

      console.log(competence)

      if(competence.id == this.id){

        let imgLink = "../assets/images/logo-langages/" + (competence.name).toLocaleLowerCase() + ".svg";

        let div = document.createElement('div')
        div.innerHTML = `

          <div class="image-logo img-fluid text-center m-5">
            <img src="${imgLink}" alt="">
          </div>

          <div>
            <div class="fs-2 fw-semibold text-center p-3">${competence.name}</div>
            <div class="fw-light text-justify p-4">${competence.description}</div>
          </div>

        `

        contentDetail.appendChild(div)
      }

    })

  }

}
