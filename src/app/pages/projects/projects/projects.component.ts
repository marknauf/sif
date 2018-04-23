import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    title: String;
    names: any;
    states: any;
    searchableList: any
  docID: any;
  documents: any [];
  constructor(private router: Router, route: ActivatedRoute) {

    this.title = "SIF Search";
    this.docID = route.snapshot.params['id'];
    console.log(this.docID);
    let projects = require('../../data/projects.json');
    this.states = projects;
    this.searchableList = ['name', 'pi']

  }

  onBack() {
    this.router.navigate(['/', 'home']);
  }
  ngOnInit() {
  }

}
