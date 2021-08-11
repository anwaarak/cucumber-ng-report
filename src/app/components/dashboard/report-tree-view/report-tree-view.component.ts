import { Component, OnInit, Injectable } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlattener,
  MatTreeFlatDataSource
} from '@angular/material/tree';
import { of as ofObservable, Observable, BehaviorSubject } from 'rxjs';

/**
 * Node for report  item
 */
export class ReportNode {
  children: ReportNode[];
  item: string;
}

/** Flat report item node with expandable and level information */
export class ReportFlatNode {
  item: string;
  level: number;
  expandable: boolean;
}

/**
 * The Json object for report  data.
 */
const TREE_DATA = {
  description: 'This is description of the feature',
  elements: [
    {
      description: 'Perfect background',
      steps: [
        {
          result: {
            duration: 99107447000,
            status: 'passed'
          }
        }
      ]
    }
  ]
};

/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a report item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
@Injectable()
export class ChecklistDatabase {
  dataChange: BehaviorSubject<ReportNode[]> = new BehaviorSubject<
    ReportNode[]
  >([]);

  get data(): ReportNode[] {
    return this.dataChange.value;
  }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Build the tree nodes from Json object. The result is a list of `ReportmNode` with nested
    //     file node as children.
    const data = this.buildFileTree(TREE_DATA, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `ReportNode`.
   */
  buildFileTree(value: any, level: number) {
    let data: any[] = [];
    for (let k in value) {
      let v = value[k];
      let node = new ReportNode();
      node.item = `${k}`;
      if (v === null || v === undefined) {
        // no action
      } else if (typeof v === 'object') {
        node.children = this.buildFileTree(v, level + 1);
      } else {
        node.item = v;
      }
      data.push(node);
    }
    return data;
  }

}

/**
 * @title Tree with checkboxes
 */
@Component({
  selector: 'app-report-tree-view',
  templateUrl: './report-tree-view.component.html',
  styleUrls: ['./report-tree-view.component.css'],
   providers: [ChecklistDatabase]
})

export class ReportTreeViewComponent implements OnInit {

  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  flatNodeMap: Map<ReportFlatNode, ReportNode> = new Map<
    ReportFlatNode,
    ReportNode
  >();

  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap: Map<ReportNode, ReportFlatNode> = new Map<
    ReportNode,
    ReportFlatNode
  >();

  /** A selected parent node to be inserted */
  selectedParent: ReportFlatNode | null = null;

  /** The new item's name */
  newItemName: string = '';

  treeControl: FlatTreeControl<ReportFlatNode>;

  treeFlattener: MatTreeFlattener<ReportNode, ReportFlatNode>;

  dataSource: MatTreeFlatDataSource<ReportNode, ReportFlatNode>;

  /** The selection for checklist */
  checklistSelection = new SelectionModel<ReportFlatNode>(
    true /* multiple */
  );

  constructor(private database: ChecklistDatabase) {
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren
    );
    this.treeControl = new FlatTreeControl<ReportFlatNode>(
      this.getLevel,
      this.isExpandable
    );
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );

    database.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });
  }

  getLevel = (node: ReportFlatNode) => {
    return node.level;
  };

  isExpandable = (node: ReportFlatNode) => {
    return node.expandable;
  };

  getChildren = (node: ReportNode): Observable<ReportNode[]> => {
    return ofObservable(node.children);
  };

  hasChild = (_: number, _nodeData: ReportFlatNode) => {
    return _nodeData.expandable;
  };

  hasNoContent = (_: number, _nodeData: ReportFlatNode) => {
    return _nodeData.item === '';
  };

  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: ReportNode, level: number) => {
    let flatNode =
      this.nestedNodeMap.has(node) &&
      this.nestedNodeMap.get(node)!.item === node.item
        ? this.nestedNodeMap.get(node)!
        : new ReportFlatNode();
    flatNode.item = node.item;
    flatNode.level = level;
    flatNode.expandable = !!node.children;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  };

  /** Whether all the descendants of the node are selected */
  descendantsAllSelected(node: ReportFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    return descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: ReportFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child =>
      this.checklistSelection.isSelected(child)
    );
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: ReportFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);
  }
   ngOnInit(): void {
  }
}


/*
import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

@Component({
  selector: 'app-report-tree-view',
  templateUrl: './report-tree-view.component.html',
  styleUrls: ['./report-tree-view.component.css']
})


export class ReportTreeViewComponent implements OnInit {


  report: any = {};
  steps: any = {};


  constructor() {
  }

  ngOnInit(): void {
    this.report = resData;
    this.steps = resData.elements[0].steps[0];
  }
  }


  const resData =  {

        "description": "This is description of the feature",
        "elements": [
            {
                "description": "Perfect background",
                "steps": [
                    {
                        "result": {
                            "duration": 99107447000,
                            "status": "passed"
                        }
						}]
						}]

  }*/
