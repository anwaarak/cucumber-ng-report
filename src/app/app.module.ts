import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AgChartsAngularModule } from 'ag-charts-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { DragDropComponent } from './components/home/drag-drop/drag-drop.component';
import { DndDirective } from './directives/dnd.directive';
import { FileProgressComponent } from './components/home/file-progress/file-progress.component';
import { ChartComponent } from './components/dashboard/chart/chart.component';
import { ReportComponent } from './components/dashboard/report/report.component';
import { ViewFileComponent } from './components/home/view-file/view-file.component';
import { CucumberJsonParserComponent } from './components/dashboard/cucumber-json-parser/cucumber-json-parser.component';
import { HttpClientModule } from '@angular/common/http';
import { ReportTreeViewComponent } from './components/dashboard/report-tree-view/report-tree-view.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    SidebarComponent,
    DragDropComponent,
    DndDirective,
    FileProgressComponent,
    ChartComponent,
    ReportComponent,
    ViewFileComponent,
    CucumberJsonParserComponent,
    ReportTreeViewComponent,
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    AgChartsAngularModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatTreeModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
  ],
  exports: [
    CdkTreeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
