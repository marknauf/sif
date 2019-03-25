import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsPastComponent implements OnInit {

    private apiUrl = "https://spreadsheets.google.com/feeds/list/1ejWQIpPrgNpnIFQ5PoaKrvVLgcb6jua1GZbAWHWXFow/od6/public/values?alt=json";
    sifProjects: any = {};
    initative: any[];
    initiativeID: string;
    reportID: any;
    url: any;
    states: any;
    matchId: number;
    reports: any [];
    projects: any;
    allDataFetched: boolean = false;


    constructor(private spinnerService: Ng4LoadingSpinnerService, private http: Http, private router: Router, route: ActivatedRoute, public sanitizer: DomSanitizer) {
      this.reportID = route.snapshot.params['id'];
      this.initiativeID = route.snapshot.params['id'];
      this.initiativeID = (parseInt(this.initiativeID)-1).toString();
      this.matchId = route.snapshot.params['id'];
      this.sanitizer = sanitizer
          this.spinnerService.show();

    }

    getData(){
        return this.http.get(this.apiUrl)
          .map((res: Response) => res.json())
    }

    getProjects(){
        this.getData().subscribe(data => {

            this.sifProjects = data.feed.entry;

            this.states = this.sifProjects;


            this.initative = this.states.filter(
                 state => state.gsx$id.$t === this.matchId);

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
       return this.sanitizer.bypassSecurityTrustResourceUrl(this.initative[0].gsx$pastreport.$t);

     }


}
