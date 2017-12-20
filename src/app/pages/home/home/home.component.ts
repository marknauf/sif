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
  searchableList: any
  constructor(private router: Router) {
    this.title = "SIF Search";
    this.states = [
      {
        name: 'Luminosity',
        pi: 'Mark Naufel',
        overview: "Luminosity will be a small, interdiciplnary group of ASU's brightest talent who will work together to transform knowledge into solutions that will impact soceity. The group will focus on operational, technical, and design excellence, and will push the boundaries of creativity in finding solutions to complex problems. Luminsoity will strive to become a model of how great things can be designed and developed in a timely and cost-effective manner.",
        id: 1,
      },
      {
        name: 'ASU Prep Digital Start Up',
        pi: 'James Rund',
        overview: 'ASU Digital Prep will be an on-line charter school providing a new avenue of access to a complete high school education for students throughout Arizona, the nation and the world. ASU Digital Prep will allow thousands of students to complete a high school education regardless of geographic location.',
        id: 2,
      },
      {
        name: 'ASU Alumni Law Group',
        pi: 'Dean Sylvester',
        overview: "The ASU Alumni Law Group is a not-for profit law firm. At the firm, experienced attorneys closely supervise new attorneys while providing affordable legal services in a variety of practice areas. The ASU Alumni Law Group was created to help recent graduates of the Sandra Day O'Conner College of Law become more practice-ready by providing them with further practical legal instruction through both closely supervised on-the-job training and a structured curriculum.",
        id: 3,
      },
      {
        name: 'Arizona Town Hall',
        pi: 'Jonathan Koppell',
        overview: 'We plan to work with Town Hall research committee to create a report outline, conduct research, and write a background report to inform their deliberation at the November Town Hall Forum.',
        id: 4,
      }
    ]
    this.searchableList = ['name', 'pi']
  }

  treeChartData = {
    chartType: 'TreeMap',
    dataTable: [
      ['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'],
      ['SIF Fund', null, 0, 0],
      ['Policy', 'SIF Fund', 0, 0],
      ['University Affairs', 'SIF Fund', 0, 0],
      ['Social Sciences', 'SIF Fund', 0, 0],
      ['Bio/Health', 'SIF Fund', 0, 0],
      ['Media', 'SIF Fund', 0, 0],
      ['Luminosity', 'Social Sciences', 11, 10],
      ['Digital Prep', 'University Affairs', 52, 31],
      ['ASU HabLab Center', 'Bio/Health', 24, 12],
      ['Center for the Future of War', 'Policy', 16, -23],
      ['Legislative Academy', 'Policy', 42, -11],
      ['Mayo', 'Bio/Health', 31, -2],
      ['Prescott Center', 'Social Sciences', 22, -13],
      ['Translational Research Insitute', 'Policy', 17, 4],
      ['Arizona Town Hall', 'University Affairs', 21, -5],
      ['American Indian Initiatives', 'University Affairs', 36, 4],
      ['Rennard Strickland Collection Project', 'Media', 20, -12],
      ['CSI Assistant Director - Ruth Wylie', 'Media', 40, 63],
      ['Jeffrey M. Cunningham, Professor of Practice', 'Media', 4, 34],
      ['Public & Hybrid Organizations Center', 'Policy', 1, -5],
      ['Bioscience Ethics, Policy, and Law', 'Bio/Health', 12, 24],
      ['Computational History of Science', 'Social Sciences', 18, 13],
      ['HOMER - Human Origins Migration Evol', 'Social Sciences', 11, -52],
      ['Morrison Institute for Public Policy', 'Social Sciences', 21, 0],
      ['Rodney Hero Center ', 'Social Sciences', 30, 43],
      ['Cronkite School AZ PBS', 'Media', 12, 2],
      ['Ed Lab Selingo', 'University Affairs', 10, 12],
      ['Mandela Washington Fellowship', 'Policy', 8, 10]
    ],
    options: {},
  };

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
  }

}
