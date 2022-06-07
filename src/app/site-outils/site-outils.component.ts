import { Component, OnInit } from '@angular/core';

import * as data from "../../assets/data/site-outils.json";

@Component({
  selector: 'app-site-outils',
  templateUrl: './site-outils.component.html',
  styleUrls: ['./site-outils.component.scss']
})
export class SiteOutilsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(data)
  }

}
