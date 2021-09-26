import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ViewFileComponent } from './components/home/view-file/view-file.component';
import { ReportComponent } from './components/dashboard/report/report.component';
import { CucumberJsonParserComponent } from './components/dashboard/cucumber-json-parser/cucumber-json-parser.component';
import { ReportTreeViewComponent } from './components/dashboard/report-tree-view/report-tree-view.component';


const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "dashboard", component: DashboardComponent },
    { path: "view-file", component: ViewFileComponent },
    { path: "reports", component: ReportComponent },
    { path: "json", component: CucumberJsonParserComponent },
    { path: "treeView", component: ReportTreeViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
