import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmailService {

  private _TRAINER_GRADE_REMINDER = 'trainerGradeReminder';
  private _VP_BATCH_STATUS_REPORT = 'vpBatchStatusReport';
  trainer: any = {};

  constructor(private httpClient: HttpClient) { }

  public sendEmail(email_type: string, interval: number, delay: number) {
    return this.httpClient.post('/emails/startSchedule', {
      email_type,
      interval,
      delay
    });
  }

  get VP_BATCH_STATUS_REPORT() {
    return this._VP_BATCH_STATUS_REPORT;
  }

  get TRAINER_GRADE_REMINDER() {
    return this._TRAINER_GRADE_REMINDER;
  }

}
