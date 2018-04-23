//our root app component
import {single, multi} from './data';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {Routes, RouterModule} from '@angular/router';

@Component({
  selector: 'd3graph-app',
  templateUrl: './d3graph.component.html',
  styleUrls: ['./d3graph.component.css']
})
export class D3graphComponent {
  single: any[];
  multi: any[];
  data: any[];
  newArray: any;
  states: any[]
  seriesData: any;
  initiativeID: string;
  initative: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Year';
  showYAxisLabel = true;
  yAxisLabel = 'Funding';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };




  // line, area
  autoScale = true;

constructor(private router: Router, route: ActivatedRoute){
    Object.assign(this, {single, multi})
    this.initiativeID = route.snapshot.params['id'];
    this.initiativeID = (parseInt(this.initiativeID)-1).toString();
    // console.log("myID", this.initiativeID)


    let projects = require('../data/projects.json');
    this.states = projects;

    this.seriesData = [
        {
          "name": "2003",
          "value": this.states[this.initiativeID].ACFY2003 == 0 ? 0 : parseFloat(this.states[this.initiativeID].ACFY2003.replace(/,/g, ''))
        },
        {
          "name": "2004",
          "value": this.states[this.initiativeID].ACFY2004 == 0 ? 0 : parseFloat(this.states[this.initiativeID].ACFY2004.replace(/,/g, ''))
        },
        {
          "name": "2005",
          "value": this.states[this.initiativeID].ACFY2005 == 0 ? 0 : parseFloat(this.states[this.initiativeID].ACFY2005.replace(/,/g, ''))
        },
        {
          "name": "2006",
          "value": this.states[this.initiativeID].ACFY2006 == 0 ? 0 : parseFloat(this.states[this.initiativeID].ACFY2006.replace(/,/g, ''))
        },
        {
          "name": "2007",
          "value": this.states[this.initiativeID].ACFY2007 == 0 ? 0 : parseFloat(this.states[this.initiativeID].ACFY2007.replace(/,/g, ''))
        },
        {
          "name": "2008",
          "value": this.states[this.initiativeID].ACFY2008 == 0 ? 0 : parseFloat(this.states[this.initiativeID].ACFY2008.replace(/,/g, ''))
        },
        {
          "name": "2009",
          "value": this.states[this.initiativeID].ACFY2009 == 0 ? 0 : parseFloat(this.states[this.initiativeID].ACFY2009.replace(/,/g, ''))
        },
      {
        "name": "2010",
        "value": this.states[this.initiativeID].ACFY2010 == 0 ? 0 : parseFloat(this.states[this.initiativeID].ACFY2010.replace(/,/g, ''))
      },
      {
        "name": "2011",
        "value": this.states[this.initiativeID].ACFY2011 == 0 ? 0 : parseFloat(this.states[this.initiativeID].ACFY2011.replace(/,/g, ''))
      },
      {
        "name": "2012",
        "value": this.states[this.initiativeID].ACFY2012 == 0 ? 0 : parseFloat(this.states[this.initiativeID].ACFY2012.replace(/,/g, ''))
      },
      {
        "name": "2013",
        "value": this.states[this.initiativeID].ACFY2013 == 0 ? 0 : parseFloat(this.states[this.initiativeID].ACFY2013.replace(/,/g, ''))
      },
      {
        "name": "2014",
        "value": this.states[this.initiativeID].ACFY2014 == 0 ? 0 : parseFloat(this.states[this.initiativeID].ACFY2014.replace(/,/g, ''))
      },
      {
        "name": "2015",
        "value": this.states[this.initiativeID].ACFY2015 == 0 ? 0 : parseFloat(this.states[this.initiativeID].ACFY2015.replace(/,/g, ''))
      },
      {
        "name": "2016",
        "value": this.states[this.initiativeID].ACFY2016 == 0 ? 0 : parseFloat(this.states[this.initiativeID].ACFY2016.replace(/,/g, ''))
      },
      {
        "name": "2017",
        "value": this.states[this.initiativeID].ACFY2017 == 0 ? 0 : parseFloat(this.states[this.initiativeID].ACFY2017.replace(/,/g, ''))
      },
    ]


    this.newArray = this.seriesData.filter(function (el) {
      return el.value > 0
    });

    console.log(this.newArray);

  }


  onSelect(event) {
    console.log(event);
  }


ngOnInit(){
    console.log(this.states[this.initiativeID])
    this.initative = this.states[this.initiativeID]
    console.log(this.initative)
    this.data = [
      {
        "name": this.states[this.initiativeID].Initiative,
        "series": this.newArray
      }
    ]
console.log(this.data);

// this.newArray = this.seriesData.filter(function (el) {
//   return el.value > 0
// });
//
// console.log(this.newArray);
}
  onBack() {
    this.router.navigate(['/', 'home']);
  }

}
