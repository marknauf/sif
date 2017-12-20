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

  onBack() {
    this.router.navigate(['/', 'home']);
  }
  ngOnInit() {
  }

}
