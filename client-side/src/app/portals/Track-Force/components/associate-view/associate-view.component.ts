import { Component, OnInit } from '@angular/core';
import { AssociateService } from '../../services/associates-service/associates-service';
import { AuthenticationService } from '../../services/authentication-service/authentication.service';
import { AutoUnsubscribe } from '../../decorators/auto-unsubscribe.decorator';
import { ActivatedRoute } from '@angular/router';
import { GambitTrainee } from '../../../../gambit-client/entities/GambitTrainee';
import { ClientListService } from '../../services/client-list-service/client-list.service';
/**
* @author Michael Tseng
*
* @description This is the view for associates only
*
*/
@Component({
  selector: 'app-associate-view',
  templateUrl: './associate-view.component.html',
  styleUrls: ['./associate-view.component.css']
})
@AutoUnsubscribe
export class AssociateViewComponent implements OnInit {
  public associate: GambitTrainee = new GambitTrainee();
  public interviews: Array<any> = [];
  public messages: Array<string> = ['I cleared my interview with FINRA', 'Please update my status'];
  public newMessage = '';
  public newInterview: any = {
    client: null,
    date: null,
    type: null,
    feedback: null
  };
  public selectedMarketingStatus: string;
  public clients: Array<any> = [];
  public selectedClient = '';
  public formOpen = false;

  constructor(
    private associateService: AssociateService,
    private authService: AuthenticationService,
    private activated: ActivatedRoute,
    private clientService: ClientListService) { }

  ngOnInit() {
    // gets the associate id from the path
    // the '+' coerces the parameter into a number
    const id = +this.activated.snapshot.paramMap.get('id');
    this.getAssociate(id);
    this.getInterviews(id);
    this.getClients();
  }

  /**
  * @description Wraps the associate service to get associate info
  *
  * @param {number} id
  * the id number of the associate
  */
  getAssociate(id: number) {
    this.associateService.getAssociate(id).subscribe(
      data => {
        this.associate = data;
      },
      err => {
        console.log(err);
    });
  }

  getClients() {
    this.clientService.getAllClients().subscribe(
      data => {
        this.clients = data;
      },
      err => {
        console.log(err);
    });
  }

  toggleForm() {
    this.formOpen = !this.formOpen;
  }

  sendMessage() {
    const tempString = this.newMessage;
    if (this.newMessage) {
      this.messages.push(tempString.toString());
    }
  }

  addInterview() {
    console.log(this.newInterview);
    const interview = {
      associateId: this.associate.userId,
      clientId: this.newInterview.client,
      typeId: this.newInterview.type,
      interviewDate: new Date(this.newInterview.date).getTime(),
      interviewFeedback: this.newInterview.feedback
    };
    this.associateService.addInterviewForAssociate(this.associate.userId, interview).subscribe(
      data => {
        this.getInterviews(this.associate.userId);
      },
      err => {
        console.log(err);
      }
    );
  }

  getInterviews(id: number) {
    this.associateService.getInterviewsForAssociate(id).subscribe(
      data => {
        const tempArr = [];
        for (let i = 0; i < data.length; i++) {
          const interview = data[i];
          const intObj = {
            id: interview.id,
            client: interview.tfClientName,
            date: new Date(interview.tfInterviewDate),
            type: interview.typeName,
            feedback: interview.tfInterviewFeedback
          };
          tempArr.push(intObj);
        }
        this.interviews = tempArr;
      }
    );
  }
}
