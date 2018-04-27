import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

    title: String;
    names: any;
    states: any;
    searchableList: any
  docID: any;
  documents: any [];

  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    // {
    //   name: 'SIF Project Description Report(FY18-20)',
    //   updated: new Date('12/14/17'),
    // },
    {
      name: 'SIF Project Class Report',
      updated: new Date('12/17/17'),
      link: 'https://www.dropbox.com/s/dwpnqzax70bphta/Copy%20of%20SIF%20Project%20Class%20Report%20%28FY18-20%29.xls?dl=0'
  },
//   {
//     name: 'SIF Strategic Area Report(FY18-20)',
//     updated: new Date('12/11/17'),
// }
  ];

  constructor(private router: Router, route: ActivatedRoute) {

  }

  onBack() {
    this.router.navigate(['/', 'home']);
  }
  ngOnInit() {
  }

}
