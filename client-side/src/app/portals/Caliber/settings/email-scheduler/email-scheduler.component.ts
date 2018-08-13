import { Component, OnInit } from '@angular/core';
import { NgbTimepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-email-scheduler',
  templateUrl: './email-scheduler.component.html',
  styleUrls: ['./email-scheduler.component.css'],
  providers: [NgbTimepickerConfig, EmailService]
})
export class EmailSchedulerComponent implements OnInit {

  performanceReportTrainers;
  gradeReminderTrainers;
  performanceReportSchedule;
  gradeReminderSchedule;

  intervalIndex: number;
  emailTypeDisplay: string;
  refreshSchedule1: any;
  refreshSchedule2: any;
  delay: number;
  d = new Date();
  date: NgbDateStruct = { year: this.d.getFullYear(), month: this.d.getMonth() + 1, day: this.d.getDate()};
  time: NgbTimeStruct = { hour: this.d.getHours(), minute: this.d.getMinutes(), second: 0 };

  interval: string;
  intervalSeconds = 0;
  intervalQuantity = 0;
  intervalOptions = ['Minutes', 'Hours', 'Days', 'Weeks'];
  emailOptions = ['Grade Reminder', 'Performance Report'];
  // the below comment could be used to simplify the switch in chooseInterval()
  // doesn't really work with the 10 second demo option
  // intervalValues = [1, 3, 7, 0];
  constructor(config: NgbTimepickerConfig, private emailService: EmailService) {
    // customize default values of ratings used by this component tree
    config.seconds = false;
    config.spinners = false;
    this.interval = 'Minutes';
    this.emailTypeDisplay = 'Performance Report';
  }

  startSchedule() {
    this.calculateSeconds();
    const now = new Date();
    console.log(this.date);
    const start = new Date(this.date.year, this.date.month - 1, this.date.day, this.time.hour, this.time.minute, 0, 0);
    this.delay = (start.getTime() - now.getTime()) / 1000;

    let emailType;
    if (this.emailTypeDisplay === 'Performance Report') {
      emailType = this.emailService.VP_BATCH_STATUS_REPORT;
    } else {
      emailType = this.emailService.TRAINER_GRADE_REMINDER;
    }
    // console.log(start + 'start');
    // console.log(this.intervalQuantity + 'iq ');
    // console.log('type: ' + emailType);
    // console.log('seconds: ' + this.intervalSeconds);
    // console.log('delay: ' + this.delay);

    this.emailService.startSchedule(emailType, this.intervalSeconds, this.delay).subscribe(data => {
      // console.log(data);
      if (emailType === this.emailService.VP_BATCH_STATUS_REPORT) {
        this.performanceReportSchedule = data;
        if (this.performanceReportSchedule.delay <= 0) {
          setTimeout( () => {
          this.emailService.getSchedule(this.emailService.VP_BATCH_STATUS_REPORT).subscribe(data2 => {
            this.performanceReportSchedule = data2;
          });
          } , 2000 );
        }
        // this.scheduleRefresh(this.emailService.VP_BATCH_STATUS_REPORT, this.performanceReportSchedule.delay,
        //    this.performanceReportSchedule.interval);
      } else if (emailType === this.emailService.TRAINER_GRADE_REMINDER) {
        this.gradeReminderSchedule = data;
        // this.scheduleRefresh(this.emailService.TRAINER_GRADE_REMINDER, this.gradeReminderSchedule.delay,
        //   this.gradeReminderSchedule.interval);
        if (this.gradeReminderSchedule.delay <= 0) {
          setTimeout( () => {
          this.emailService.getSchedule(this.emailService.TRAINER_GRADE_REMINDER).subscribe(data2 => {
            this.gradeReminderSchedule = data2;
          });
          } , 2000 );
        }
      }
    });
    this.intervalQuantity = 0;
  }

  scheduleRefresh(interval: number) {
    // clearInterval(this.refreshSchedule1);
    // clearInterval(this.refreshSchedule2);
    this.refreshSchedule1 = setInterval(
      () => {
        this.emailService.getSchedule(this.emailService.VP_BATCH_STATUS_REPORT).subscribe(data2 => {
          this.performanceReportSchedule = data2;
        });
      } , interval * 1000);

    this.refreshSchedule2 = setInterval(
      () => {
        this.emailService.getSchedule(this.emailService.TRAINER_GRADE_REMINDER).subscribe(data2 => {
          this.gradeReminderSchedule = data2;
        });
      } , interval * 1000);
  }


  chooseInterval(item) {
    this.interval = this.intervalOptions[item];
    this.intervalIndex = item;
  }

  chooseType(type) {
    this.emailTypeDisplay = this.emailOptions[type];
  }

  calculateSeconds() {
    // console.log('calc');
    // console.log(this.intervalIndex);
    switch (this.intervalIndex) {
      case 0:
        this.intervalSeconds = this.intervalQuantity * 60;
        break;
      case 1:
        this.intervalSeconds = this.intervalQuantity * 60 * 60;
        break;
      case 2:
        this.intervalSeconds = this.intervalQuantity * 60 * 60 * 24;
        break;
      case 3:
        this.intervalSeconds = this.intervalQuantity * 60 * 60 * 24 * 7;
        break;
      default:
        break;
    }

  }

  cancelGrade() {
    this.intervalSeconds = 0;
    this.delay = 0;
    this.emailService.startSchedule(this.emailService.TRAINER_GRADE_REMINDER,
    this.intervalSeconds, this.delay).subscribe(data => this.gradeReminderSchedule = data);
  }

  cancelPerformance() {
    this.intervalSeconds = 0;
    this.delay = 0;
    this.emailService.startSchedule(this.emailService.VP_BATCH_STATUS_REPORT,
    this.intervalSeconds, this.delay).subscribe(data => this.performanceReportSchedule = data);
  }
  ngOnInit() {
    this.emailService.getTrainers(this.emailService.TRAINER_GRADE_REMINDER).subscribe(data => {
      this.gradeReminderTrainers = data;
    });
    this.emailService.getTrainers(this.emailService.VP_BATCH_STATUS_REPORT).subscribe(data => {
      this.performanceReportTrainers = data;
    });
    this.emailService.getSchedule(this.emailService.TRAINER_GRADE_REMINDER).subscribe(data => {
      this.gradeReminderSchedule = data;
    });
    this.emailService.getSchedule(this.emailService.VP_BATCH_STATUS_REPORT).subscribe(data => {
      this.performanceReportSchedule = data;
    });
    // this.date = '2018-08-10';
    this.intervalIndex = 0;
    this.scheduleRefresh(10);
  }

}
