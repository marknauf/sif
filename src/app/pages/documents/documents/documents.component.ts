import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  docID: any;
  documents: any [];
  constructor(private router: Router, route: ActivatedRoute) {
    this.docID = route.snapshot.params['id'];
    console.log(this.docID);
  }

  onBack() {
    this.router.navigate(['/', 'home']);
  }
  ngOnInit() {
  }

}
