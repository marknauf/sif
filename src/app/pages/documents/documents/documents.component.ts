import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  private apiUrl = "https://spreadsheets.google.com/feeds/list/1ejWQIpPrgNpnIFQ5PoaKrvVLgcb6jua1GZbAWHWXFow/od6/public/values?alt=json";
  sifProjects: any = {};
  initative: any[];
  initiativeID: string;
  docID: any;
  url: any;
  states: any;
  matchId: number;
  documents: any [];
  projects: any;
  allDataFetched: boolean = false;


  constructor(private http: Http, private router: Router, route: ActivatedRoute, public sanitizer: DomSanitizer) {
    this.docID = route.snapshot.params['id'];
    console.log(this.docID);
    this.initiativeID = route.snapshot.params['id'];
    this.initiativeID = (parseInt(this.initiativeID)-1).toString();
    this.matchId = route.snapshot.params['id'];
    this.sanitizer = sanitizer



    // let projects = require('../../data/projects.json');
    // this.states = projects;



  }

  getData(){
      return this.http.get(this.apiUrl)
        .map((res: Response) => res.json())
  }

  getProjects(){
      this.getData().subscribe(data => {
          console.log("JSON DATA", data)
          this.sifProjects = data.feed.entry;
           console.log("JSON NEW", this.sifProjects)
          this.states = this.sifProjects;
          console.log("JSON States", this.states)

          // console.log("THIS IS MY ID", this.states.gsx$id.$t)
          this.initative = this.states.filter(
               state => state.gsx$id.$t === this.matchId);
               console.log(this.initative);
               this.allDataFetched = true;
      })
  }

  onBack() {
    this.router.navigate(['/', 'home']);
  }

  data(event) {

    this.router.navigate(['/', 'data', event]);

  }


  ngOnInit() {

         this.getProjects();
  }

  cleanURL() {
     return this.sanitizer.bypassSecurityTrustResourceUrl(this.initative[0].gsx$dropboxlink.$t);
   }

}
