import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTreeViewComponent } from './report-tree-view.component';

describe('ReportTreeViewComponent', () => {
  let component: ReportTreeViewComponent;
  let fixture: ComponentFixture<ReportTreeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportTreeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
