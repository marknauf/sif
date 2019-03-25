import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { FilterPipe } from './filter.pipe';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing.module';
import { ReportsComponent } from './pages/reports/reports/reports.component'
import { ReportsPastComponent } from './pages/reports-past/reports/reports.component'
import { HomeComponent } from './pages/home/home/home.component'
import { AnnualComponent } from './pages/annual/annual/annual.component'
import { ProjectsComponent } from './pages/projects/projects/projects.component'
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { DocPageComponent } from './pages/docpage/docpage/docpage.component'
import { NbThemeModule } from '@nebular/theme';
import { D3Service } from 'd3-ng2-service'; // <-- import statement
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AuthService } from './auth/auth.service';
import { AuthGuardService as AuthGuard } from './auth-guard.service';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { AppComponent } from './app.component';
import { DocumentsComponent } from './pages/documents/documents/documents.component';
import {HttpModule} from '@angular/http';
import {CdkTableModule} from '@angular/cdk/table';
import { D3graphComponent } from './pages/d3graph/d3graph.component';
import {CallbackComponent} from './callback/callback.component';

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    FlexLayoutModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: []
})
export class DemoMaterialModule { }

@NgModule({
  imports: [
    BrowserModule,
    NbThemeModule.forRoot({ name: 'default' }),
    Ng4LoadingSpinnerModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    Ng2GoogleChartsModule,
    FormsModule,
    NgxChartsModule,
    HttpModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],

  declarations: [AnnualComponent, CallbackComponent, AppComponent, ReportsComponent, ReportsPastComponent, DocPageComponent, D3graphComponent, ProjectsComponent, HomeComponent, DocumentsComponent, FilterPipe],
  bootstrap: [AppComponent],
  providers: [D3Service, HomeComponent, AuthService, AuthGuard]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
