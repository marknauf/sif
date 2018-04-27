import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  initative: any[];
  initiativeID: string;
  docID: any;
  url: any;
  states: any;
  documents: any [];
  projects: any;
  constructor(private router: Router, route: ActivatedRoute, public sanitizer: DomSanitizer) {
    this.docID = route.snapshot.params['id'];
    console.log(this.docID);
    this.initiativeID = route.snapshot.params['id'];
    this.initiativeID = (parseInt(this.initiativeID)-1).toString();
    this.sanitizer = sanitizer

    let projects = require('../../data/projects.json');
    this.states = projects;
  }

  onBack() {
    this.router.navigate(['/', 'home']);
  }
  ngOnInit() {

      this.initative = this.states[this.initiativeID]


  }

  cleanURL() {
     return this.sanitizer.bypassSecurityTrustResourceUrl(this.states[this.initiativeID].DropboxLink);
   }

}
