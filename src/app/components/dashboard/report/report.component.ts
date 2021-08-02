import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../../services/data.service';
import { Report } from '../../../model/report';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ELEMENT_DATA : Report[] = [] ;
  displayedColumns: string[] = ['id', 'tags', 'description', 'name', 'keyword', 'line','elements'];
  dataSource = new MatTableDataSource<Report>(this.ELEMENT_DATA);

  constructor(private _dataService: DataService,
    private _router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
  this.dataSource.paginator = this.paginator;
     this.dataSource.sort=this.sort;
     this.getReport();
  }

  getReport(){
   let resp = this._dataService.getReport();
   resp.subscribe(report=>this.dataSource.data = report as Report[]);
   }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  }
