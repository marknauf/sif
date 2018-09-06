import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Routes, RouterModule} from '@angular/router';
import {FormControl} from '@angular/forms';
import { FilterPipe }from '../../../filter.pipe';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
// import {map} from 'rxjs/operators/map';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';


export class State {
  constructor(public name: string, public overview: string, public id: number, public pi: string) { }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  private apiUrl = "https://spreadsheets.google.com/feeds/list/1ejWQIpPrgNpnIFQ5PoaKrvVLgcb6jua1GZbAWHWXFow/od6/public/values?alt=json";
  sifProjects: any = {};
  title: String;
  names: any;
  states: any;
  dataTable: any;
  searchableList: any = ['gsx$pi'];
  allDataFetched: boolean = false;

  treeData: any;

  constructor(private router: Router, private http: Http) {
      // this.getProjects();
    this.title = "SIF Search";
    // let projects = require('../../data/projects.json');
    // this.states = this.sifProjects;
    // this.searchableList = ['initiative', 'pi', 'type']
// this.searchableList = ['pi']

  }

  getData(){
      return this.http.get(this.apiUrl)
        .map((res: Response) => res.json())
  }

  runMap(){

      for (var i = 0; i < this.states.length; i++) {
           const addition = [this.states[i].gsx$initiative.$t,
            this.states[i].gsx$stratarea.$t,
             this.states[i].gsx$acfy2017.$t == 0 ? 0 : parseFloat(this.states[i].gsx$acfy2017.$t.replace(/,/g, '')),
              this.states[i].gsx$acfy2017.$t == 0 ? 0 : parseFloat(this.states[i].gsx$acfy2017.$t.replace(/,/g, ''))]

           this.treeChartData.dataTable.push(addition)
           this.treeData = this.treeChartData.dataTable

       }
       this.states = this.states.filter(
            state => state.gsx$pi.$t !== "Legacy");

  }

  getProjects(){
      return this.getData().subscribe(
          data => {
          this.sifProjects = data.feed.entry;
          this.states = this.sifProjects;
          // this.searchableList = ['pi'];
          // this.searchableList = ['gsx$initiative.$t']
          this.runMap();
          this.allDataFetched = true;


      }
  );
  }

  treeChartData = {
    chartType: 'TreeMap',

    dataTable: [
      ['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'],
      ['SIF Fund', null, 0, 0],
      ['University Affairs', 'SIF Fund', 0, 0],
      ['Education', 'SIF Fund', 0, 0],
      ['Sustainability', 'SIF Fund', 0, 0],
      ['Entrepreneurship / Innovation', 'SIF Fund', 0, 0],
      ['Computing & Informatics', 'SIF Fund', 0, 0],
      ['Media', 'SIF Fund', 0, 0],
      ['Policy', 'SIF Fund', 0, 0],
      ['Arts & Humanities', 'SIF Fund', 0, 0],
      ['Social Sciences', 'SIF Fund', 0, 0],
      ['Provost Investment Funds', 'SIF Fund', 0, 0],
      ['Advanced Materials', 'SIF Fund', 0, 0],
      ['BIO/ Health', 'SIF Fund', 0, 0],
      ['Human Welfare & Care', 'SIF Fund', 0, 0],
      ['Earth and Space Discovery & Exploration', 'SIF Fund', 0, 0],
    ],
    options: {generateTooltip: this.showFullTooltip,
        highlightOnMouseOver: true,
           maxDepth: 1,
           maxPostDepth: 1,
           fontColor: '#ffffff',
           minHighlightColor: '#ffffff',
           midHighlightColor: '#5C6670',
           maxHighlightColor: '#4d545b',
           minColor: '#ffffff',
           midColor: '#8C1D40',
           maxColor: '#7c1a39'},
  };

  showFullTooltip(row, size, value) {
      return '<div style="background:#fd9; padding:10px; border-style:solid">' +
             '<span style="font-family:Courier"><b>' +
             'Amount: $' + size + '</div>';
    }

  pageStart: number = 0;
  pageEnd: number = 100;
  pageHeight: number = 30;
  pageBuffer: number = 100;

  onScroll(event, doc) {
    const scrollTop = event.target.scrollTop;
    const scrollHeight = event.target.scrollHeight;
    const offsetHeight = event.target.offsetHeight;
    const scrollPosition = scrollTop + offsetHeight;
    const scrollTreshold = scrollHeight - this.pageHeight;
    if (scrollPosition > scrollTreshold) {
      this.pageEnd += this.pageBuffer;
    }
  }

  documents(event) {

    this.router.navigate(['/', 'docs', event]);

  }

  reporting(event) {

    this.router.navigate(['/', 'reports', event]);

  }

  projects() {

    this.router.navigate(['/', 'projects']);

  }

  reports() {

    window.open("https://www.dropbox.com/home/Strategic%20Initiative%20Funds/SIF%20Reports",'_blank');

  }

  annual() {

    this.router.navigate(['/', 'annual']);

  }

  docpage() {

    this.router.navigate(['/', 'docpage']);

  }

  data(event) {

    this.router.navigate(['/', 'data', event]);

  }

  ngOnInit() {
      this.getProjects()
  }

}
