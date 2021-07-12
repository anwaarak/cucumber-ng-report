import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ViewFileComponent } from './components/home/view-file/view-file.component';
const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "dashboard", component: DashboardComponent },
    { path: "view-file", component: ViewFileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
