import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-annual',
  templateUrl: './annual.component.html',
  styleUrls: ['./annual.component.css']
})
export class AnnualComponent implements OnInit {

    title: String;
    names: any;
    states: any;
    searchableList: any
  docID: any;
  documents: any [];
  constructor(private router: Router, route: ActivatedRoute) {

  }

  onBack() {
    this.router.navigate(['/', 'home']);
  }
  ngOnInit() {
  }

}
