<<<<<<< HEAD
// import { Tag } from './tag';
=======
import { Tag } from './tag';
>>>>>>> Refactoring SimpleTrainee as Candidate; mostly renaming -Tyerra Smith
import { Candidate } from './Candidate';
import { CaliberTrainer } from './caliberTrainer';
import { SkillType } from './skillType';

/*
  Entity representing all data related to the screening of a candidate
*/
export interface Screening {
  screeningID: number;
  candidateID: number;
  screenerID: number;
  skillTypeID: number;
  compositeScore: number;
  aboutMeCommentary: string;
  generalCommentary: string;
  softSkillCommentary: string;
  startDateTime: Date;
  endDateTime: Date;
  softSkillsVerdict: boolean;
  status: string;
}
