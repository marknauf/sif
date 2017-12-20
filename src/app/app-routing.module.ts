import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { DocumentsComponent } from './pages/documents/documents/documents.component'
import { ProjectsComponent } from './pages/projects/projects/projects.component'
import { ReportsComponent } from './pages/reports/reports/reports.component'
import { AnnualComponent } from './pages/annual/annual/annual.component'
import { DocPageComponent } from './pages/docpage/docpage/docpage.component'
import { HomeComponent } from './pages/home/home/home.component'
import {D3graphComponent} from './pages/d3graph/d3graph.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'docs/:id',
    component: DocumentsComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'annual',
    component: AnnualComponent
  },
  {
    path: 'docpage',
    component: DocPageComponent
  },
  {
    path: 'data/:id',
    component: D3graphComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
