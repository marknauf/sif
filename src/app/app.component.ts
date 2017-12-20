import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import { FilterPipe }from './filter.pipe';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import {Routes, RouterModule} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

}
