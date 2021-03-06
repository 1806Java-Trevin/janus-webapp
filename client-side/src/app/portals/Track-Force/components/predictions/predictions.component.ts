import { Component, OnInit } from '@angular/core';
import { SkillsetService } from '../../services/skill-set-service/skill-set.service';
import { PredictionService} from '../../services/prediction-service/prediction.service';
import { AutoUnsubscribe } from '../../decorators/auto-unsubscribe.decorator';
// import {FormsComponent} from '@angular/core';

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.css']
})
@AutoUnsubscribe
export class PredictionsComponent implements OnInit {
  public dataReady = false;
  public startDate: Date = new Date();
  public endDate: Date = new Date();
  public numAssociatesNeeded: number;
  public technologies: any[];
  public expanded = false;
  public results: any;
  public message = '';

  constructor(private ss: SkillsetService, private ps: PredictionService) { }

  ngOnInit() {
    this.getListofCurricula();
  }

  toggleCheckboxes() {
    this.expanded = !this.expanded;
  }

  getListofCurricula() {
    this.ss.getAllCurricula().subscribe(
      data => {
        console.log(data);
        const tempArray = [];
        for (let i = 0; i < data.length; i++) {
          const tech = data[i];
          const localtech = {
            id: tech.id,
            name: tech.name,
            selected: false
          };
          tempArray.push(localtech);
        }
        this.technologies = tempArray;
        // IF API RETURNS AN OBJECT INSTEAD OF ARRAY
        // let tempVar = [];
        // for (var key in data) {
        //   let tech = data[key];
        //   tempVar.push(tech);
        // }
        // this.technologies = tempVar;
      },
     err => {
       console.log(err);
     }
    );
  }

  getPrediction(s, e) {
    if (s != null) {
      this.startDate = s;
    }
    if (e != null) {
      this.endDate = e;
    }
    console.log(this.technologies);
    const selectedTechnologies = [];
    for (let i = 0; i < this.technologies.length; i++) {
      const tech = this.technologies[i];
      if (tech.selected) {
        selectedTechnologies.push(tech.name);
      }
    }
    console.log(selectedTechnologies);
    const startTime = new Date(this.startDate).getTime();
    const endTime = new Date(this.endDate).getTime();
    console.log(startTime);
    console.log(endTime);
    if (startTime && endTime && selectedTechnologies.length > 0) {
      this.message = '';
      this.ps.getPrediction(startTime, endTime, selectedTechnologies).subscribe(
        data => {
          console.log(data);
          this.results = [];
          const returnedNames = [];
          for (let i = 0; i < data.length; i++) {
            const tech = data[i];
            const techName = tech[0];
            const techNumber = tech[1];
            if (selectedTechnologies.includes(techName)) {
              // if techname is in the list of selected technologies, add it as a result
              this.results.push({
                technology: techName,
                requested: this.numAssociatesNeeded,
                available: techNumber
              });
              returnedNames.push(techName);
            }
          }
          for (let i = 0; i < selectedTechnologies.length; i++) {
            const selectedTech = selectedTechnologies[i];
            if (!returnedNames.includes(selectedTech)) {
              // if the list of returned technologies does not include one we selected, then it means
              // there are 0 associates with that technology
              this.results.push({
                technology: selectedTech,
                requested: this.numAssociatesNeeded,
                available: 0
              });
            }
          }
          this.dataReady = true;
        },
        err => {
          console.log(err);
        }
      );
    }
  }

}
