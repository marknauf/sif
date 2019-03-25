import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { DocumentsComponent } from './pages/documents/documents/documents.component'
import { ProjectsComponent } from './pages/projects/projects/projects.component'
import { ReportsComponent } from './pages/reports/reports/reports.component'
import { ReportsPastComponent } from './pages/reports-past/reports/reports.component'
import { AnnualComponent } from './pages/annual/annual/annual.component'
import { DocPageComponent } from './pages/docpage/docpage/docpage.component'
import { HomeComponent } from './pages/home/home/home.component'
import {D3graphComponent} from './pages/d3graph/d3graph.component'
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import {CallbackComponent} from './callback/callback.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'callback',
    component: CallbackComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'docs/:id',
    component: DocumentsComponent,
    canActivate: [AuthGuard],

  },
  {
    path: 'reports/:id',
    component: ReportsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'reports-past/:id',
    component: ReportsPastComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'annual',
    component: AnnualComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'docpage',
    component: DocPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'data/:id',
    component: D3graphComponent,
    canActivate: [AuthGuard],
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
