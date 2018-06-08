//our root app component
import {single, multi} from './data';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {Routes, RouterModule} from '@angular/router';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'd3graph-app',
  templateUrl: './d3graph.component.html',
  styleUrls: ['./d3graph.component.css']
})
export class D3graphComponent {

  private apiUrl = "https://spreadsheets.google.com/feeds/list/1ejWQIpPrgNpnIFQ5PoaKrvVLgcb6jua1GZbAWHWXFow/od6/public/values?alt=json";

  sifProjects: any = {};
  single: any[];
  multi: any[];
  data: any[];
  newArray: any;
  states: any[]
  seriesData: any;
  matchId: number;
  initiativeID: string;
  initative: any[];
  allDataFetched: boolean = false;

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

constructor(private http: Http, route: ActivatedRoute, private router: Router){

    Object.assign(this, {single, multi})
    this.initiativeID = route.snapshot.params['id'];
    this.matchId = route.snapshot.params['id'];
    this.initiativeID = (parseInt(this.initiativeID)).toString();

}

    getData(){
     return this.http.get(this.apiUrl)
       .map((res: Response) => res.json())
    }

    // this.initative = this.states.filter(
    //     state => state.ID === this.matchId);

    getProjects(){
     this.getData().subscribe(data => {
         this.sifProjects = data.feed.entry;
         this.states = this.sifProjects;

         this.initative = this.states.filter(
              state => state.gsx$id.$t === this.matchId);
              this.createChart();
              this.allDataFetched = true;

     })


    }

  onSelect(event) {

  }

createChart(){

                  this.seriesData = [
                      {
                        "name": "2003",
                        "value": this.initative[0].gsx$acfy2003.$t == 0 ? 0 : parseFloat(this.initative[0].gsx$acfy2003.$t.replace(/,/g, ''))
                      },
                      {
                        "name": "2004",
                        "value": this.initative[0].gsx$acfy2004.$t == 0 ? 0 : parseFloat(this.initative[0].gsx$acfy2004.$t.replace(/,/g, ''))
                      },
                      {
                        "name": "2005",
                        "value": this.initative[0].gsx$acfy2005.$t == 0 ? 0 : parseFloat(this.initative[0].gsx$acfy2005.$t.replace(/,/g, ''))
                      },
                      {
                        "name": "2006",
                        "value": this.initative[0].gsx$acfy2006.$t == 0 ? 0 : parseFloat(this.initative[0].gsx$acfy2006.$t.replace(/,/g, ''))
                      },
                      {
                        "name": "2007",
                        "value": this.initative[0].gsx$acfy2007.$t == 0 ? 0 : parseFloat(this.initative[0].gsx$acfy2007.$t.replace(/,/g, ''))
                      },
                      {
                        "name": "2008",
                        "value": this.initative[0].gsx$acfy2008.$t == 0 ? 0 : parseFloat(this.initative[0].gsx$acfy2008.$t.replace(/,/g, ''))
                      },
                      {
                        "name": "2009",
                        "value": this.initative[0].gsx$acfy2009.$t == 0 ? 0 : parseFloat(this.initative[0].gsx$acfy2009.$t.replace(/,/g, ''))
                      },
                    {
                      "name": "2010",
                      "value": this.initative[0].gsx$acfy2010.$t == 0 ? 0 : parseFloat(this.initative[0].gsx$acfy2010.$t.replace(/,/g, ''))
                    },
                    {
                      "name": "2011",
                      "value": this.initative[0].gsx$acfy2011.$t == 0 ? 0 : parseFloat(this.initative[0].gsx$acfy2011.$t.replace(/,/g, ''))
                    },
                    {
                      "name": "2012",
                      "value": this.initative[0].gsx$acfy2012.$t == 0 ? 0 : parseFloat(this.initative[0].gsx$acfy2012.$t.replace(/,/g, ''))
                    },
                    {
                      "name": "2013",
                      "value": this.initative[0].gsx$acfy2013.$t == 0 ? 0 : parseFloat(this.initative[0].gsx$acfy2013.$t.replace(/,/g, ''))
                    },
                    {
                      "name": "2014",
                      "value": this.initative[0].gsx$acfy2014.$t == 0 ? 0 : parseFloat(this.initative[0].gsx$acfy2014.$t.replace(/,/g, ''))
                    },
                    {
                      "name": "2015",
                      "value": this.initative[0].gsx$acfy2015.$t == 0 ? 0 : parseFloat(this.initative[0].gsx$acfy2015.$t.replace(/,/g, ''))
                    },
                    {
                      "name": "2016",
                      "value": this.initative[0].gsx$acfy2016.$t == 0 ? 0 : parseFloat(this.initative[0].gsx$acfy2016.$t.replace(/,/g, ''))
                    },
                    {
                      "name": "2017",
                      "value": this.initative[0].gsx$acfy2017.$t == 0 ? 0 : parseFloat(this.initative[0].gsx$acfy2017.$t.replace(/,/g, ''))
                    },
                  ]


                  this.newArray = this.seriesData.filter(function (el) {
                    return el.value > 0
                  });

        


                  this.data = [
                    {
                      "name": this.initative[0].gsx$initiative.$t,
                      "series": this.seriesData
                    }
                  ]

}

documents(event) {

  this.router.navigate(['/', 'docs', event]);

}

ngOnInit(){
    // this.initative = this.states.filter(
    //      state => state.ID === this.matchId);
    //      console.log("TESTING", this.initative[0])

this.getProjects();

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
