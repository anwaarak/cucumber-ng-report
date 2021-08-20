import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../../services/data.service';
import { Report } from '../../../model/report';
import { AgGridAngular } from 'ag-grid-angular';
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
//ag-grid
  @ViewChild('agGrid')
  agGrid!: AgGridAngular;

  ELEMENT_DATA : Report[] = [] ;
  displayedColumns: string[] = ['id', 'tags', 'description', 'name', 'keyword', 'line','elements'];
  dataSource = new MatTableDataSource<Report>(this.ELEMENT_DATA);

  constructor(private _dataService: DataService,
    private _router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {

  }

  }

