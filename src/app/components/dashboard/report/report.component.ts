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
    //ag-grid
    rowData : any;
    columnDefs = [{
        headerName: '',
        children: [
      { headerName: 'Feature', field: 'name', sortable: true, filter: true, resizable: true,  width : 150,
      checkboxSelection: true,cellStyle: { backgroundColor: '#B5EAEA' }},
      ],
      },
      {
       headerName: 'Steps',
        children: [
      { headerName: 'Passed', field: '', sortable: true, filter: true, resizable: true,  width : 100,cellStyle: { backgroundColor: '#EDF6E5' }},
      { headerName: 'Failed', field: '', sortable: true, filter: true, resizable: true, width : 100,cellStyle: { backgroundColor: '#FFBCBC' }},
      { headerName: 'Skipped', field: '', sortable: true, filter: true, resizable: true, width : 100,cellStyle: { backgroundColor: '#C9CBFF' }},
      { headerName: 'Pending', field: '', sortable: true, filter: true, resizable: true, width : 100,cellStyle: { backgroundColor: '#CDF3A2' }},
      { headerName: 'Undefined', field: '', sortable: true, filter: true, resizable: true,  width : 120,cellStyle: { backgroundColor:  '#FFBCBC' }},
      { headerName: 'Total', field: '', sortable: true, filter: true, resizable: true,  width : 80,cellStyle: { backgroundColor:  '#B5EAEA' }},

      ],
      },
       {
       headerName: 'Scenarios',
        children: [
      { headerName: 'Passed', field: '', sortable: true, filter: true, resizable: true,  width : 100,cellStyle: { backgroundColor: '#EDF6E5' }},
      { headerName: 'Failed', field: '', sortable: true, filter: true, resizable: true, width : 100,cellStyle: { backgroundColor: '#FFBCBC' }},
      { headerName: 'Total', field: '', sortable: true, filter: true, resizable: true,  width : 100,cellStyle: { backgroundColor:  '#B5EAEA' }},
         ],
      },
      {
       headerName: 'Features',
        children: [
      { headerName: 'Duration', field: 'elements.0.steps.0.result.duration', sortable: true, filter: true, resizable: true,  width : 110,cellStyle: { backgroundColor: '#EDF6E5' }},
      { headerName: 'Status', field: 'elements.0.steps.0.result.status', sortable: true, filter: true, resizable: true, width : 110,cellStyle: { backgroundColor: '#FFBCBC' }},
         ],
      },
        ];

  ngOnInit(): void {
    //aggrid
     this.rowData = this._dataService.getReport()
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

