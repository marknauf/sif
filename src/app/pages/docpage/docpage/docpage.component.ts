import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-docpage',
  templateUrl: './docpage.component.html',
  styleUrls: ['./docpage.component.css']
})
export class DocPageComponent implements OnInit {

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
    {
      name: 'Approval Memo',
      updated: new Date('12/14/17'),
    },
    {
      name: 'Categories and Strategic Areas',
      updated: new Date('12/17/17'),
  },
  {
    name: 'FlowChart',
    updated: new Date('12/11/17'),
},
{
  name: 'SIF Bi-Annual Progress Report',
  updated: new Date('12/11/17'),
},
{
  name: 'SIF Budget Request',
  updated: new Date('12/11/17'),
},
{
  name: 'SIF Process Cover Page',
  updated: new Date('12/11/17'),
},
{
  name: 'SIF Process',
  updated: new Date('12/11/17'),
},
{
  name: 'SIF Request Form',
  updated: new Date('12/11/17'),
}
  ];
  constructor(private router: Router, route: ActivatedRoute) {


  }

  onBack() {
    this.router.navigate(['/', 'home']);
  }
  ngOnInit() {
  }

}
