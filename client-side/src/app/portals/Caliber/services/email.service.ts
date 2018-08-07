import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmailService {

  private _TRAINER_GRADE_REMINDER = 'trainerGradeReminder';
  private _VP_BATCH_STATUS_REPORT = 'vpBatchStatusReport';
  _trainer: any = {};

  constructor(private httpClient: HttpClient) { }

  public startSchedule(email_type: string, interval: number, delay: number) {
    return this.httpClient.post('/emails/startSchedule', {
      email_type,
      interval,
      delay
    });
  }

  public getSchedule(email_type: string) {
    return this.httpClient.get('/emails/getSchedule?email_type=' + email_type);
  }

  public getTrainers(email_type: string) {
    return this.httpClient.get('/emails/getTrainers?email_type=' + email_type);
  }

  // public sendEmail(id: number) {
  //   return this.httpClient.post('/emails/send/{id}', {});
  // }

  get VP_BATCH_STATUS_REPORT() {
    return this._VP_BATCH_STATUS_REPORT;
  }

  get TRAINER_GRADE_REMINDER() {
    return this._TRAINER_GRADE_REMINDER;
  }

  get trainer(){
    return this._trainer;
  }

  set trainer(trainer: any){
    this._trainer = trainer;
  }
}
