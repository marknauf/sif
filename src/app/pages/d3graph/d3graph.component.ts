//our root app component
import {single, multi} from './data';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'd3graph-app',
  templateUrl: './d3graph.component.html',
  styleUrls: ['./d3graph.component.css']
})
export class D3graphComponent {
  single: any[];
  multi: any[];

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

constructor(private router: Router){
    Object.assign(this, {single, multi})
  }

  onSelect(event) {
    console.log(event);
  }


ngOnInit(){

}
  onBack() {
    this.router.navigate(['/', 'home']);
  }

}
