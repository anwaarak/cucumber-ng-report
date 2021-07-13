import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CucumberJsonParserComponent } from './cucumber-json-parser.component';

describe('CucumberJsonParserComponent', () => {
  let component: CucumberJsonParserComponent;
  let fixture: ComponentFixture<CucumberJsonParserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CucumberJsonParserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CucumberJsonParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
