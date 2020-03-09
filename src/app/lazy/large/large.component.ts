import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-large',
  templateUrl: './large.component.html',
  styleUrls: ['./large.component.scss']
})
export class LargeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(moment);
  }

}
