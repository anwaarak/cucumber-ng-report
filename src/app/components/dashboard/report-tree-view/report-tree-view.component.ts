import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
const TREE_DATA: FoodNode[] = [
  { name: 'id : account-holder-withdraws-cash' },
  {
    name: 'tags',
    children: [
      { name: 'name : @featureTag' },
      { name: ' line: 1' },
    ]
  },
  { name: 'description : This is description of the feature' },
  { name: 'name : 1st feature' },
  { name: 'keyword : Feature' },
  { name: 'line : 2' },
  { name: 'elements',
    children: [
      { name: 'description : Perfect background' },
      { name: 'name : Activate Credit Card' },
      { name: 'keyword" : "Background' },
      { name: 'line : 7'},
      { name: 'steps',
      children: [
        { name : 'result',
        children: [
          { name: 'duration : 99107447000' },
          { name: 'status : passed' },
        ] },
        { name: 'name : I have a new credit card'},
        { name: 'keyword : Given'},
        { name: 'line : 8'},
        { name: 'match',
        children:[
          { name: 'location : ATMScenario.I_have_a_new_credit_card()'}
        ]},
        { name : 'embeddings',
        children: [
        { name : 'mime_type : image/url' },
        { name : 'data : aHR0cDovL2xvY2FsaG9zdC9zdGF0aWMvbG9nby5wbmc= ' }
        ]},
      ]}
    ] },
];


@Component({
  selector: 'app-report-tree-view',
  templateUrl: './report-tree-view.component.html',
  styleUrls: ['./report-tree-view.component.css']
})
export class ReportTreeViewComponent implements OnInit {

   private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
     this.dataSource.data = TREE_DATA;
   }
     hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
  }

}
