import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-count-record',
  templateUrl: './count-record.component.html',
  styleUrls: ['./count-record.component.css']
})
export class CountRecordComponent implements OnInit {

  @Input() count;
  constructor() { }

  ngOnInit() {
  }

}
