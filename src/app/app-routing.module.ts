import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ViewFileComponent } from './components/home/view-file/view-file.component';
import { CucumberJsonParserComponent } from './components/dashboard/cucumber-json-parser/cucumber-json-parser.component';


const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "dashboard", component: DashboardComponent },
    { path: "view-file", component: ViewFileComponent },
    { path: "json", component: CucumberJsonParserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
