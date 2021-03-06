import { Injectable, Inject } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable()
export class UrlService {
  //public readonly context: string =  environment.localhostContext;
  //public readonly context: string =  environment.gambitContext;
  public readonly context : string = environment.caliberContext;

  //services
  public readonly techScreening : string = "/tech-screening";
  public readonly adminScreening : string = "/screening-admin";

  apiCurrentBatchesLineChart = this.context + 'all/reports/dashboard';

  apiCurrentPanelsLineChart = this.context + 'all/reports/biweeklyPanelResults';

  constructor() {
  }

  /**
   * In Alphabatical order MUST continue to keep in Alphabatical order
   * to make it easier to find what you are looking for.
   *
   * @author Alex Pich | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Danny S Chhun | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
   */

  addsubtopics = {
    // getBatchSubtopicsUrl: (batchId: number, pageNumber: number, pageSize: number) =>
    //   `${this.context}/calendar/subtopicspagination/${batchId}/${pageSize}/${pageNumber}`,
    getBatchIdUrl: (batchId: number) => `${this.context}/batches/batch/${batchId}`,
    addSubtopicUrl: () => `${this.context}/curricula/schedules`,
    getSubtopicPoolUrl: (curriculumId: number) => `${this.context}/curricula/${curriculumId}/subtopics`,
    updateDateUrl: (subtopicId: number, batchId: number, date: number) =>
      `${this.context}/calendar/dateupdate/${subtopicId}/${batchId}/${date}`,
    updateScheduleURL: `${this.context}/curricula/schedules`,
    addNewScheduledSubtopic: (scheduleId: number) => `${this.context}/curricula/scheduled-subtopics?schedule=${scheduleId}`
  };


  assessment = {
    fetchByBatchIdByWeek: (batchId: number, week: number) => `${this.context}/trainer/assessment/${batchId}/${week}`,
    save: () => `${this.context}/trainer/assessment/create`,
    update: () => `${this.context}/trainer/assessment/update`,
    delete: (assessmentId: number) => `${this.context}/trainer/assessment/delete/${assessmentId}`,
  };

  assignForce = {
    refreshBatches: () => `${this.context}/refreshbatches`
  };

  bambatch = {
    getBatchAllUrl: () => `${this.context}/batches/`,
    getPastBatchesUrl: (trainerId: number) => `${this.context}/batches/past/${trainerId}`,
    getFutureBatchesUrl: (trainerId: number) => `${this.context}/batches/future/${trainerId}`,
    getBatchInProgressUrl: (email: string) => `${this.context}/batches/inprogress/${email}`,
    getAllBatchesInProgressUrl: (trainerId: number) => `${this.context}/batches/current/${trainerId}`,
    getBatchByIdURL: (batchId: number) => `${this.context}/batches/batch/${batchId}`,
    updateBatchUrl: () => `${this.context}/batches/batch`,
    getAllBatchTypesUrl: () => `${this.context}/batches/types`,
    removeSubtopicFromBatchUrl: (subtopicId: number) => `${this.context}/batch/${subtopicId}`,
    getAllInProgressUrl: () => `${this.context}/batches/current/`
  };

  /**
   * Endpoints for batches
   */
  batches = {
    fetchAllByTrainer: () => `${this.context}/batches/trainers`,
    fetchAllByTrainerId: (id: number) => `${this.context}/batches/trainers/${id}`,
    fetchAll: () => `${this.context}/batches`,
    save: () => `${this.context}/batches`,
    update: () => `${this.context}/batches`,
    delete: (batchId) => `${this.context}/batches/${batchId}`
  };

  /**
   * Endpoints for bucket service
   *
   * @author Alex Pich | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Danny S Chhun | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
   */

  private bucketEndpoint = `${this.adminScreening}/bucket`;
  bucket = {
    getAllBuckets: () => `${this.context + this.bucketEndpoint}`,
    getBucketById: (bucketId: number) => `${this.context + this.bucketEndpoint}/${bucketId}`,
    updateBucket: (bucketId : number) => `${this.context + this.bucketEndpoint}/${bucketId}`,
    createNewBucket: () => `${this.context + this.bucketEndpoint}`,
    deleteBucket: (bucketId: number) => `${this.context + this.bucketEndpoint}/${bucketId}`
  };

  /**
   * Endpoints for buildings:
   * This section is being added for use in the location service
   * @author Tanhim Ahmed
   */
  building = {
    getBuildingById: (buildingId: number) => `${this.context}/buildings/${buildingId}`,
    getBuildingsByLocationId: (locationId: number) => `${this.context}/buildings/location/${locationId}`,
    getAllBuildings: () => `${this.context}/buildings/`,
    postBuilding: () => `${this.context}/buildings/`,
    putBuildingById: (buildingId: number) => `${this.context}/buildings/${buildingId}`,
    // deleteBuildingById: (buildingId: number) => `${this.context}/buidlings/${buildingId}`
  };

  calendar = {
    // getSubtopicsByBatchPaginationUrl: (batchId: number, pageNumber: number, pageSize: number) =>
    //   `${this.context}/calendar/subtopicspagination/${batchId}/${pageNumber}/${pageSize}/`,
    getScheduleById: (scheduleId: number) => `${this.context}/curricula/schedules/${scheduleId}`,
    getSubtopicsByBatchUrl: (batchId: number) => `${this.context}/calendar/subtopics/${batchId}`,
    getNumberOfSubTopicsByBatchUrl: (batchId: number) => `${this.context}/calendar/getnumberofsubtopics/${batchId}`,
    getTopicsByBatchPagUrl: (batchId: number) => `${this.context}/calendar/topics/${batchId}`,
    changeTopicDateUrl: `${this.context}/curricula/scheduled-subtopics`,
    updateTopicStatusUrl: (subtopicId: number, batchId: number, status: string) =>
      `${this.context}/curricula/schedules`,
    addTopicsUrl: () => `${this.context}/calendar/addtopics`
  };

  candidate = {
    getAll: () => `${this.context}/candidate`,
    getById: (id : number) => `${this.context}/candidate/${id}`,
    update: (id : number) => `${this.context}/candidate/${id}`,
    create: () => `${this.context}/candidate`,
    delete: (id: number) => `${this.context}candidate/${id}`,
  };

  private categoryEndpoint = `${this.adminScreening}/category`;
  category = {
    fetchAll: () => { console.log("context: %s, endpoint %s", this.context, this.categoryEndpoint);
    return `${this.context}${this.categoryEndpoint}`},
    //fetchAllActive: () => `${this.context}category/all`,
    fetchById: (id: number) => `${this.context}${this.categoryEndpoint}/${id}`,
    save: () => `${this.context}${this.categoryEndpoint}`,
    update: () => `${this.context}${this.categoryEndpoint}/update`,
    //update: () => `${this.context}/category/update`,

    createCategory: () => `${this.context}${this.categoryEndpoint}`,
    getCategories: () => `${this.context}${this.categoryEndpoint}`,
    getCategoryById: (id: number) => `${this.context}${this.categoryEndpoint}/${id}`,
    updateCategory: (id:number) => `${this.context}${this.categoryEndpoint}/${id}`,
    deleteCategory: (id: number) => `${this.context}${this.categoryEndpoint}/${id}`,
  };

  curriculum = {
    getCurriculumAllUrl: () => `${this.context}/curricula/all`,
    getCurriculumByIdUrl: (id: number) => `${this.context}/curricula?ids=${id}`,
    getSchedulesByCurriculumIdUrl: (id: number) => `${this.context}/curricula/${id}/schedules`,
    getTopicPoolAllUrl: () => `${this.context}/topics/`,
    getSubtopicPoolAllUrl: () => `${this.context}/curricula/subtopicpool`,
    addCurriculumUrl: () => `${this.context}/curricula/`,
    makeCurriculumMasterByIdUrl: (id: number) => `${this.context}/curricula/${id}/master`,
    syncBatchByIdUrl: (id: number) => `${this.context}/curricula/syncbatch/${id}`,
    deleteCurriculumVersionUrl: () => `${this.context}/curricula/deleteversion`,
    getScheduleById: (id: number) => `${this.context}/curricula/schedules/${id}`,
    addSchedule: () => `${this.context}/curricula/schedules`
  };

  grade = {
    fetchByBatchIdByWeek: (batchId, week) => `${this.context}all/grades/batch/${batchId}/week/${week}`,
    save: () => `${this.context}trainer/grade/create`,
    update: () => `${this.context}trainer/grade/update`,
  };

  /**
   * Endpoints for locations:
   * This section is being added for use in the location service
   * @author Tanhim Ahmed
   */
  location = {
    getLocationById: (locationId: number) => `${this.context}/locations/${locationId}`,
    getAllLocations: () => `${this.context}/locations/`,
    postLocation: () => `${this.context}/locations/`,
    putLocationById: (locationId: number) => `${this.context}/locations/${locationId}`,
    deleteLocationById: (locationId: number) => `${this.context}/locations/${locationId}`,
    /**Migrated location from old environment.ts diifrent from above */
    fetchAll: () => `${this.context}all/location/all`,
    save: () => `${this.context}vp/location/create`,
    update: () => `${this.context}vp/location/update`,
  };

  note = {
    fetchQcBatchNotesByBatchIdByWeek: (batchId: number, week: number) => `${this.context}qc/note/batch/${batchId}/${week}`,
    fetchQcTraineeNotesByBatchIdByWeek: (batchId: number, week: number) => `${this.context}qc/note/trainee/${batchId}/${week}`,
    fetchBatchNotesByBatchIdByWeek: (batchId: number, week: number) => `${this.context}trainer/note/batch/${batchId}/${week}`,
    fetchTraineeNotesByBatchIdByWeek: (batchId: number, week: number) => `${this.context}trainer/note/trainee/${batchId}/${week}`,
    fetchTrainingNotesByTrainee: (traineeId: number) => `${this.context}all/notes/trainee/${traineeId}`,
    fetchQcNotesByTrainee: (traineeId: number) => `${this.context}qc/note/trainee/${traineeId}`,
    update: () => `${this.context}note/update`,
    save: () => `${this.context}note/create`,
    getAllQCTraineeNotes: (batchId: number, week: number) => `${this.context}qc/note/trainee/${batchId}/${week}`,
    findQCBatchNotes: (batchId: number, week: number) => `${this.context}qc/note/batch/${batchId}/${week}`,
  };

  panel = {
    fetchAll: () => `${this.context}panel/all`,
    fetchAllByTrainee: (traineeId) => `${this.context}panel/trainee/${traineeId}`,
    save: () => `${this.context}panel/create`,
    update: () => `${this.context}panel/update`,
    delete: (panelId: number) => `${this.context}panel/delete/${panelId}`,
  };

  qcStatus = {
    fetchAll: () => `${this.context}types/qcstatus/all`,
  };

  /**
   * Endpoints for questions service
   *
   * @author Alex Pich | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Danny S Chhun | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
   */
  private questionEndpoint = `${this.context}${this.adminScreening}/question`;
  question = {
    postQuestion: () => `${this.questionEndpoint}`,
    putQuestion: (questionId : number) => `${this.questionEndpoint}/${questionId}`,
    getQuestionsByBucketId: (bucketId: number) => `${this.context}${this.adminScreening}/bucket/${bucketId}/question`,
    // Tyerra Smith added a url to get ALL questions
    getQuestions: () => `${this.questionEndpoint}`,
    deactivateQuestion: (questionId: number) => `${this.questionEndpoint}/${questionId}/deactivate`,
    activateQuestion: (questionId: number) => `${this.questionEndpoint}/${questionId}/activate`,
    filteredQuestions: () => `${this.questionEndpoint}/filter`,
    deleteQuestion: (questionId: number) => `${this.questionEndpoint}/${questionId}`,
  };

  //private questionScoringEndpoint = 'question-score-service/question';
  private questionScoringEndpoint = `${this.techScreening}/question`;
  questionScoring = {
    scoringQuestion: () => `${this.context + this.questionScoringEndpoint}/score`,
    getQuestionScore: (screeningId : number) => `${this.context + this.questionEndpoint}/score/${screeningId}`
  };

    // Reports Service API endpoints
    reportsStackedBarCurrentWeek = this.context + this.questionScoringEndpoint + 'all/reports/batch/week/stacked-bar-current-week';
    reportsDashBoard = this.context + this.questionScoringEndpoint + 'all/reports/dashboard';
    reportsBiWeeklyPanel = this.context + this.questionScoringEndpoint + 'all/reports/biweeklyPanelResults';

  /**
   * Endpoints for rooms:
   * This section is being added for use in the location service
   * @author Tanhim Ahmed
   */
  room = {
    getRoomById: (roomId: number) => `${this.context}/rooms/${roomId}`,
    getAllRooms: () => `${this.context}/rooms/`,
    // getRoomsByLocationId: (locationId: number) => `${this.context}/rooms/locations/${locationId}`,
    getRoomsByBuildingId: (buildingId: number) => `${this.context}/rooms/building/${buildingId}`,
    postRoom: () => `${this.context}/rooms/`,
    putRoomById: (roomId: number) => `${this.context}/rooms/${roomId}`,
    // deleteRoomById: (roomId: number) => `${this.context}/rooms/${roomId}`
  };

  /**
   * Endpoints for screen services
   *
   * @author Alex Pich | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Danny S Chhun | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
   */
  private screeningEndpoint = `${this.techScreening}/screening`;
  //screeningEndpoint = 'screening-service/screening';
  screening = {
    scheduleScreening: () => `${this.context + this.screeningEndpoint}/scheduled`,
    startScreening: () => `${this.context + this.screeningEndpoint}/start`,
    endScreening: () => `${this.context + this.screeningEndpoint}/end`,
    introComment: () => `${this.context + this.screeningEndpoint}/introcomment`,
    generalComment: () => `${this.context + this.screeningEndpoint}/generalcomment`,
  };

  /**
   * Endpoints for simple-trainee service
   *
   * @author Alex Pich | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Danny S Chhun | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Michael Adedigba | 1803-USF-MAR26 | Wezley Singleton
   *
   * @author Pedro De Los Reyes | 1803-USF-MAR26 | Wezley Singleton
   */
  // simpleTraineeEndpoint = this.context + 'trainee-service';
  // simpleTrainee = {
  //   getAllTrainee: () => `${this.simpleTraineeEndpoint}/all/trainee/getAll/`,
  // };

  /**
   * All urls associated with skills will come from this object
   * These are CATEGORIES.
   */
  skills = {
    findAll: () => `${this.context}/skill`,
    findAllActive: () => `${this.context}/skill/active`,
    findById: (id: number) => `${this.context}/skill/${id}`,
    findByName: (name: string) => `${this.context}/skill/${name}`,
    save: () => `${this.context}/skill`,
    update: () => `${this.context}/skill/`,
    delete: (id: number) => `${this.context}/skill`
  };

  /**
   * Endpoints for skillType
   * 
   * @author John Lacap | 1805-May-29 | WVU | Richard Orr
   */

  private skillTypesServiceEndpoint = this.context + this.adminScreening + '/skilltype';
  skillTypes = {
    findAll: () => `${this.skillTypesServiceEndpoint}`,
    findAllActive: () => `${this.skillTypesServiceEndpoint}/active`,
    findById: (id: number) => `${this.skillTypesServiceEndpoint}/${id}`,
    findByName: (name: string) => `${this.skillTypesServiceEndpoint}/${name}`,
    save: () => `${this.skillTypesServiceEndpoint}`,
    saveSkill: (skillTypeId, skillId) => `${this.skillTypesServiceEndpoint}/${skillTypeId}/skill/${skillId}`,
    saveSkillByName: (skillTypeName, skillName) => `${this.skillTypesServiceEndpoint}/name/${skillTypeName}/skill/name/${skillName}`,
    update: (id: number) => `${this.skillTypesServiceEndpoint}/skillType/${id}`,
    delete: (id: number) => `${this.skillTypesServiceEndpoint}/${id}`, // note lowercase t in type, this is to match the request mapping





    getBucketBySkillType: (skillTypeId: number, categoryId: number) => `${this.skillTypesServiceEndpoint}/${skillTypeId}/category/${categoryId}/weight`,

    createSkillType: () => `${this.skillTypesServiceEndpoint}`,
    updateSkillType: (skillTypeId: number) => `${this.skillTypesServiceEndpoint}/${skillTypeId}`,
    getSkillTypes: () => `${this.skillTypesServiceEndpoint}`,
    deleteSkillType:(id: number) => `${this.skillTypesServiceEndpoint}/${id}`,
    getSkillTypeById: (skillTypeId: number) => `${this.skillTypesServiceEndpoint}/${skillTypeId}`,

    updateSkillTypeBuckets: () => `${this.skillTypesServiceEndpoint}/updateSkillTypeBucket`,
    setSkillTypeBuckets: () => `${this.skillTypesServiceEndpoint}/setSkillTypeBucket`,
  };

  softSkillsViolation = {
    getViolationTypeURL: () => `${this.context}/tech-screening/violation/type`,
    getViolationURL: (screeningID: number) => `${this.context}/tech-screening/screening/${screeningID}/violation/`,
    addViolationURL: () => `${this.context}/tech-screening/violation/`,
    deleteViolationURL: (violationID: number) => `${this.context}/tech-screening/violation/${violationID}`,
  };

  subtopic = {
    getSubtopicByIDs: (subtopicIdList: number[]) => `${this.context}/topics/subtopics?ids=${subtopicIdList}`,
    getSubtopicByID: (subtopicId: number) => `${this.context}/topics/subtopics/${subtopicId}`,
    getSubtopics: () => `${this.context}/topics/subtopics`,
    addSubTopicName: (subtopicName: string, topicId: number, typeId: number) =>
      `${this.context}/subtopics/${typeId}/${topicId}/${subtopicName}`,
    removeSubtopic: (subtopicId: number) => `${this.context}/subtopics/${subtopicId}`,
    removeAllSubtopics: (batchId: number) => `${this.context}/subtopics/${batchId}/`,
    isPopulated: (batchId: number) => `${this.context}/subtopics/ispopulated/${batchId}/`
  };

  // tagEndpoint = this.context + 'question-service/tag';
  // tags = {
  //   getAllTags: () => `${this.tagEndpoint}/getAllTags`,
  // };

  topic = {
    addTopicName: (name: string) => `${this.context}/topics/${name}`,
    changeTopicName: (name: string) => `${this.context}/topics/topic`
  };

  trainee = {
    fetchAllByBatch: (batchId: number) => `${this.context}all/trainee?batchId=${batchId}`,
    save: () => `${this.context}all/trainee/create`,
    update: () => `${this.context}all/trainee/update`,
    delete: (traineeId: number) => `${this.context}all/trainee/delete/${traineeId}`,
    fetchDroppedByBatch: (batchId: number) => `${this.context}all/trainee/`,
  };

  /**
   * Endpoints for trainees
   */
  trainees = {
    findAll: () => `${this.context}/trainees`,
    findById: (id: number) => `${this.context}/trainees/${id}`,
    findByEmail: (email: string) => `${this.context}/trainees/email?=${email}`,
    findAllByBatchAndStatus: (id: number, status: string) => `${this.context}/trainees/batch/${id}/status/${status}`,
    save: () => `${this.context}/trainees`,
    create: () => `${this.context}all/trainee/create`,
    update: () => `${this.context}/trainees`,
    delete: (traineeId: number) => `${this.context}/trainees/${traineeId}`
  };

  traineeStatus = {
    fetchAll: () => `${this.context}types/trainingstatus/all`,
  };
  /**
   * Endpoints for trainers
   */
  trainers = {
    fetchByEmail: (email: string) => `${this.context}/trainers/email/${email}/`,
    fetchAll: () => `${this.context}/trainers`,
    fetchById: (trainerId: number) => `${this.context}/trainers/${trainerId}`,
    save: () => `${this.context}/trainers`,
    update: () => `${this.context}/trainers`,
    promote: () => `${this.context}/trainers/promote`,
    getTitles: () => `${this.context}/trainers/titles`,
    getTiers: () => `${this.context}types/trainer/role/all`,
    delete: () => `${this.context}/trainers`,
  };

  trainingType = {
    fetchAll: () => `${this.context}types/training/all`,
  };

  // BAM Endpoints
  users = {
    getUserByID: (userId: number) => `${this.context}/users/${userId}`,
    getAllUsersRoles: () => `${this.context}/users/roles`,
    getAllUsersUrl: () => `${this.context}/users`,
    getAllTrainersUrl: () => `${this.context}/users/alltrainers`,
    getAllAssociatesUrl: () => `${this.context}/users/allassociates`,
    getUsersInBatchUrl: (batchId: number) => `${this.context}/users/inbatch/${batchId}`,
    dropUserFromBatchUrl: (userId: number) => `${this.context}/users/${userId}`,
    updateUserUrl: (userId: number) => `${this.context}/users/${userId}`,
    addUserUrl: () => `${this.context}/users`,
    removeUserUrl: (userId: number) => `${this.context}/users/${userId}`,
    makeInactive: () => `${this.context}/users/inactivate`,
    addUserToBatchUrl: (batchId: number, userId: number) => `${this.context}/users/batches/${userId}/${batchId}`,
    getUsersNotInBatchUrl: () => `${this.context}/users/batches/none`,
    resetPasswordUrl: () => `${this.context}/user/reset`,
    recoverPasswordUrl: () => `${this.context}/user/recovery`
  };

  /**
   * Endpoints for unavailabilities:
   * This section is being added for use in the location service
   * @author Tanhim Ahmed
   */
  unavailability = {
    // getUnavailabilityById: (unavailabilityId: number) => `${this.context}/unavailabilities/${unavailabilityId}`,
    getAllUnavailabilities: () => `${this.context}/unavailabilities/`,
    postUnavailability: () => `${this.context}/unavailabilities/`,
    // putUnavailabilityById: (unavailabilityId: number) => `${this.context}/unavailabilities/${unavailabilityId}`,
    // deleteUnavailabilityById: (unavailabilityId: number) => `${this.context}/unavailabilities/${unavailabilityId}`
  };

  /**
   * Endpoints for category weights:
   * 
   * @author John Lacap | 1805-May-29 | WVU | Richard Orr
   */
  private weightsServiceEndpoint = this.context + this.adminScreening;
  weight={
    createWeight: () => `${this.weightsServiceEndpoint}/weight`,
    getWeights: () => `${this.weightsServiceEndpoint}/weight`,
    getWeightByIds: (skillTypeId: number, categoryId: number) => `${this.weightsServiceEndpoint}/skilltype/${skillTypeId}/category/${categoryId}/weight`,
    updateWeight: (skillTypeId: number, categoryId: number) => `${this.weightsServiceEndpoint}/skilltype/${skillTypeId}/category/${categoryId}/weight`,
    deleteWeight: (skillTypeId: number, categoryId: number) => `${this.weightsServiceEndpoint}/skilltype/${skillTypeId}/category/${categoryId}/weight`,
  };

  /* Reporting service API endpoints */
  apiBatchComparisonAvgEndpoint = (skill: string, training: string, startDate) =>
    environment.context + `/all/reports/compare/skill/${skill}/training/${training}/date/${startDate}`;

  apifetchBatchWeekPieChart = (batchId: Number, weekId: Number) =>
    environment.context + `all/reports/batch/${batchId}/week/${weekId}/pie`;

  apiPieChartCurrentWeekQCStatus = (batchId: Number) =>
    environment.context + `all/reports/batch/${batchId}/pie`;

  apiAllBatchesCurrentWeekQCStackedBarChart = (batchId: Number, week: Number) =>
    environment.context + `all/reports/batch/${batchId}/week/${week}/bar-batch-week-avg`;

  apiBatchWeekAvgBarChart = (batchId: Number, week: Number) =>
    environment.context + `all/reports/batch/${batchId}/week/${week}/bar-batch-week-avg`;

  apiBatchWeekSortedBarChart = (batchId: Number, week: Number) =>
    environment.context + `all/reports/batch/${batchId}/week/${week}/bar-batch-weekly-sorted`;

  apiBatchOverallTraineeBarChart = (batchId: Number, traineeId: Number) =>
    environment.context + `all/reports/batch/${batchId}/overall/trainee/${traineeId}/bar-batch-overall-trainee`;

  apiBatchOverallBarChart = (batchId: Number) =>
    environment.context + `all/reports/batch/${batchId}/overall/bar-batch-overall`;

  apiBatchWeekTraineeBarChart = (batchId: Number, weekId: Number, traineeId: Number) =>
    environment.context + `all/reports/batch/${batchId}/week/${weekId}/trainee/${traineeId}/bar-batch-week-trainee`;

  apiTraineeUpToWeekLineChart = (batchId: Number, weekId: Number, traineeId: Number) =>
    environment.context + `all/reports/batch/${batchId}/week/${weekId}/trainee/${traineeId}/line-trainee-up-to-week`;

  apiTraineeOverallLineChart = (batchId: Number, traineeId: Number) =>
    environment.context + `all/reports/batch/${batchId}/overall/trainee/${traineeId}/line-trainee-overall`;

  apiBatchOverallLineChart = (batchId: Number) =>
    environment.context + `all/reports/batch/${batchId}/overall/line-batch-overall`;

  apiTraineeUpToWeekRadarChart = (week: Number, traineeId: Number) =>
    environment.context + `all/reports/week/${week}/trainee/${traineeId}/radar-trainee-up-to-week`;

  apiTraineeOverallRadarChart =  (traineeId: Number) =>
    environment.context + `all/reports/trainee/${traineeId}/radar-trainee-overall`;

  apiBatchOverallRadarChart = (batchId: Number) =>
    environment.context + `all/reports/batch/${batchId}/overall/radar-batch-overall`;

  apiBatchAllTraineesRadarChart = (batchId: Number) =>
    environment.context + `all/reports/batch/${batchId}/radar-batch-all-trainees`;

  apiBatchWeekAverageValue = (batchId: Number, weekId: Number) =>
    environment.context + `all/assessments/average/${batchId}/${weekId}`;

  apiTechnologiesForTheWeek = (batchId: Number, weekId: Number) =>
    environment.context + `all/assessments/categories/batch/${batchId}/week/${weekId}`;

  apiPanelBatchAllTrainees = (batchId: Number) =>
    environment.context + `all/reports/batch/${batchId}/panel-batch-all-trainees`;

  /* Evaluation service API endpoints */
  apiFetchAllQCTraineeNotes = (batchId: Number, weekId: Number) =>
    environment.context + `qc/note/trainee/${batchId}/${weekId}`;

  apiFetchAllQCBatchNotes = (batchId: Number, weekId: Number) =>
    environment.context + `qc/note/batch/${batchId}/${weekId}`
}
