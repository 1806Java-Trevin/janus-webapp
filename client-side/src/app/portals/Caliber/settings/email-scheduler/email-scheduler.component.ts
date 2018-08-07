import { Component, OnInit } from '@angular/core';
import { NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-email-scheduler',
  templateUrl: './email-scheduler.component.html',
  styleUrls: ['./email-scheduler.component.css'],
  providers: [NgbTimepickerConfig, EmailService]
})
export class EmailSchedulerComponent implements OnInit {

  emailTypeDisplay: string;
  delay: number;
  date: any;
  time: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };

  interval: string;
  intervalSeconds = 0;
  intervalOptions = ['1 Day', '3 Day', '1 Week', '10 seconds', 'Clear'];
  emailOptions = ['Grade Reminder', 'Performance Report'];
  // the below comment could be used to simplify the switch in chooseInterval()
  // doesn't really work with the 10 second demo option
  // intervalValues = [1, 3, 7, 0];
  constructor(config: NgbTimepickerConfig, private emailService: EmailService) {
    // customize default values of ratings used by this component tree
    config.seconds = false;
    config.spinners = false;
    this.interval = 'Choose Interval';
    this.emailTypeDisplay = 'Performance Report';
  }

  startSchedule() {
    const now = new Date();
    const start = new Date(this.date.year, this.date.month - 1, this.date.day, this.time.hour, this.time.minute, 0, 0);
    this.delay = (start.getTime() - now.getTime()) / 1000;

    let emailType;
    if (this.emailTypeDisplay === 'Performance Report') {
      emailType = this.emailService.VP_BATCH_STATUS_REPORT;
    }else {
      emailType = this.emailService.TRAINER_GRADE_REMINDER;
    }

    this.emailService.sendEmail(emailType, this.intervalSeconds, this.delay);
  }

  chooseInterval(item) {
    // seconds in a day
    const secondsInDay = 24 * 60 * 60;
    switch (item) {
      case 0:
        // one day interval
        this.intervalSeconds = secondsInDay;
        break;
      case 1:
        // 3 day interval
        this.intervalSeconds = 3 * secondsInDay;
        break;
      case 2:
        // 1 week interval
        this.intervalSeconds = 7 * secondsInDay;
        break;
      case 3:
        // sets interval to 10 seconds for demo purposes
        this.intervalSeconds = 10;
        break;
      case 4:
        // sets interval to 0 and cancels the service
        this.intervalSeconds = 0;
        break;
      default:
        break;
    }

    console.log(item);
  }

  chooseType(type) {
    this.emailTypeDisplay = this.emailOptions[type];
  }

  ngOnInit() {
  }

}
