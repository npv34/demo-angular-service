import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountRecordComponent } from './count-record.component';

describe('CountRecordComponent', () => {
  let component: CountRecordComponent;
  let fixture: ComponentFixture<CountRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
