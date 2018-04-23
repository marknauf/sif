import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Routes, RouterModule} from '@angular/router';
import {FormControl} from '@angular/forms';
import { FilterPipe }from '../../../filter.pipe';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


export class State {
  constructor(public name: string, public overview: string, public id: number, public pi: string) { }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  title: String;
  names: any;
  states: any;
  dataTable: any;
  searchableList: any;
  treeData: any;
  constructor(private router: Router) {
    this.title = "SIF Search";
    let projects = require('../../data/projects.json');
    this.states = projects;

        this.searchableList = ['Initiative', 'PI', 'Type']
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
    options: {generateTooltip: this.showFullTooltip},
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

  projects() {

    this.router.navigate(['/', 'projects']);

  }

  reports() {

    this.router.navigate(['/', 'reports']);

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
     for (var i = 0; i < this.states.length; i++) {
          const addition = [this.states[i].Initiative, this.states[i].StratArea, this.states[i].ACFY2017 == 0 ? 0 : parseFloat(this.states[i].ACFY2017.replace(/,/g, '')), 0]

          this.treeChartData.dataTable.push(addition)
          this.treeData = this.treeChartData.dataTable
      }
      console.log(this.treeData[0])
  }

}
