import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class EmailService {

  private _TRAINER_GRADE_REMINDER = 'trainerGradeReminder';
  private _VP_BATCH_STATUS_REPORT = 'vpBatchStatusReport';
  private url = 'http://localhost:9001';
  _trainer: any = {};

  httpOptions = {
    withCredentials: true
  };

  httpOptionsTwo = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    // headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    withCredentials: true
  };

  httpOptions2 = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient: HttpClient) { }

  public startSchedule(email_type: string, interval: number, delay: number) {
    console.log(this.httpOptionsTwo);
    // return this.httpClient.post(this.url + '/emails/startSchedule', 'email_type=' + email_type + '&interval=' + interval + '&delay=' +
    //   delay, this.httpOptions2).subscribe(data => data);
    interval = Math.floor(interval);
    delay = Math.floor(delay);
    return this.httpClient.post(this.url + '/emails/startSchedule',
    JSON.stringify({'email_type': email_type, 'interval': interval, 'delay': delay}), this.httpOptions2);
    // return this.httpClient.p
    // ost(this.url + '/emails/startSchedule', {email_type, interval, delay}, this.httpOptionsTwo).pipe(resp => resp);
  }

  public getSchedule(email_type: string) {
    return this.httpClient.get(this.url + '/emails/getSchedule?email_type=' + email_type, this.httpOptions);
  }

  public getTrainers(email_type: string) {
    return this.httpClient.get(this.url + '/emails/getTrainers?email_type=' + email_type, this.httpOptions);
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

  get trainer() {
    return this._trainer;
  }

  set trainer(trainer: any) {
    this._trainer = trainer;
  }
}
