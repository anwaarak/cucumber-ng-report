import { DisplayReport } from './../../../Dummy model/DisplayReport';
import { Description } from './../../../Dummy model/Description';
import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../../services/data.service';
import { Report } from '../../../model/report';
import { AgGridAngular } from 'ag-grid-angular';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Result } from './../../../Dummy model/Result';
import { Step } from './../../../Dummy model/Step';
import { Elements } from './../../../Dummy model/Elements';

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

  displayArr: DisplayReport[] = [];

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
      { headerName: 'Passed',field: '', sortable: true, filter: true, resizable: true,  width : 150,cellStyle: { backgroundColor: '#EDF6E5' }},
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
      { headerName: 'Duration', field: '', sortable: true, filter: true, resizable: true,  width : 110,cellStyle: { backgroundColor: '#EDF6E5' }},
      { headerName: 'Status', field: '', sortable: true, filter: true, resizable: true, width : 110,cellStyle: { backgroundColor: '#FFBCBC' }},
         ],
      },
        ];

  ngOnInit(): void {
    //aggrid
     this.constructTree();
     this.rowData = this._dataService.getReport()
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort=this.sort;
     this.getReport();
     console.log("----------------------------------------");
     for(let i = 0; i < this.displayArr.length; ++i) {
       if(this.displayArr[i].after)
       console.log("After " + this.displayArr[i].after.result.passed);
       if(this.displayArr[i].before)
       console.log("Before " + this.displayArr[i].before.result.passed);
       if(this.displayArr[i].steps)
       console.log("Steps " + this.displayArr[i].steps.result.passed);
     }
     console.log("----------------------------------------");
  }

  getReport(){
   let resp = this._dataService.getReport();
   resp.subscribe(report=>this.dataSource.data = report as Report[]);
   }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructTree(){
    const data: string = localStorage.getItem("myData");
    let parsedJson: Description[] = JSON.parse(data);
    for(let f = 0; f < parsedJson.length; ++f) {

      for(let e = 0; e < parsedJson[f].elements.length; ++e) {
        let dBf : DisplayReport = { id: parsedJson[f].elements[e].id,
        before: {duration: 0,
          result: {
            duration: "",
            status: "",
            passed:   0,
            failed:   0,
            skipped:  0,
            undefined:0
          }
        },
         steps: {
            name: "",
            keyword: "",
            line: 0,
            match: null,
            embeddings: null,
            result: {
              duration: "",
              status: "",
              passed:   0,
              failed:   0,
              skipped:  0,
              undefined:0
            }
         },
         type: "",

         after: {
            duration: 0,
            result: {
              duration: "",
              status: "",
              passed:   0,
              failed:   0,
              skipped:  0,
              undefined:0
            },
            error: ""
         }
        };
        if(parsedJson[f].elements[e].after) {
          for(let a = 0; a < parsedJson[f].elements[e].after.length; ++a) {
            if(parsedJson[f].elements[e].after[a].result)
            if(parsedJson[f].elements[e].after[a].result.status == "passed") {
              dBf.after = parsedJson[f].elements[e].after[a];
              dBf.after.result.passed += 1;
            }
          }
        }

        if(parsedJson[f].elements[e].before) {
          for(let b = 0; b < parsedJson[f].elements[e].before.length; ++b) {
            if(parsedJson[f].elements[e].before[b].result)
            if(parsedJson[f].elements[e].before[b].result.status === "passed") {

            }
          }
        }

        for(let s = 0; s < parsedJson[f].elements[e].steps.length; ++s) {

        }
        this.displayArr.push(dBf);
      }
    }
 }
}



