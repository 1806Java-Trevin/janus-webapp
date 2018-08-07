import { Component, OnInit } from '@angular/core';
import { NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-email-scheduler',
  templateUrl: './email-scheduler.component.html',
  styleUrls: ['./email-scheduler.component.css'],
  providers: [NgbTimepickerConfig]
})
export class EmailSchedulerComponent implements OnInit {

  date: any;
  time: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };
  constructor(config: NgbTimepickerConfig) {
    // customize default values of ratings used by this component tree
    config.seconds = false;
    config.spinners = false;
  }
  startSchedule() {
    const now = new Date();
    const start = new Date(this.date.year, this.date.month - 1, this.date.day, this.time.hour, this.time.minute, 0, 0);
    const offset = (start.getTime() - now.getTime()) / 1000;

  }

  ngOnInit() {
  }

}
