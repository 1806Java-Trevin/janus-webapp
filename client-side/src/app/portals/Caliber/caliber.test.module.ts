// modules
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule, NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavModule } from '../../nav/nav.module';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HttpClient } from '@angular/common/http';
import { SimpleNotificationsModule } from 'angular2-notifications-lite';
import { ScrollEventModule } from 'ngx-scroll-event';
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// routing
import { routes } from './caliber.routes';
import { SpringInterceptor } from './interceptors/spring.interceptor';

// services
import { BatchService } from './services/batch.service';
import { TraineeService } from './services/trainee.service';
import { AssessmentService } from './services/assessment.service';
import { RouteService } from './services/route.service';
import { PanelService } from './services/panel.service';
import { GradeService } from './services/grade.service';
import { NoteService } from './services/note.service';
import { GranularityService } from './reports/services/granularity.service';
// import { ReportingService } from './services/reporting.service';
// import { PDFService } from './services/pdf.service';
import { TrainingTypeService } from './services/training-type.service';
import { ColorService } from './services/colors/color.service';
import { VpHomeLineGraphService } from './services/graph/vp-home-line-graph.service';
import { VpHomeSelectorService } from './services/selector/vp-home-selector.service';
import { CategoriesService } from './services/categories.service';
import { LocationService } from './services/location.service';
// import { LocationService } from '../../gambit-client/services/location/location.service';
import { VpHomeBarGraphService } from './services/graph/vp-home-bar-graph.service';
import { VpHomePanelGraphService } from './services/graph/vp-home-panel-graph.service';
import { AlertsService } from './services/alerts.service';
import { EvaluationService } from './services/evaluation.service';
import { QCStatusService } from './services/qcstatus.service';
import { TraineeStatusService } from './services/trainee-status.service';
import { CandidateService } from './screening/services/candidate/candidate.service';
import { QuestionService } from './screening/services/question/question.service';
import { QuestionsToBucketsUtil } from './screening/util/questionsToBuckets.util';
import { ScoresToBucketsUtil } from './screening/util/scoresToBuckets.util';
import { QuestionScoreService } from './screening/services/question-score/question-score.service';
import { SkillTypeService } from './screening/services/skillType/skill-type.service';
// import { TagService } from './services/tag/tag.service';
import { SoftSkillsService } from './screening/services/soft-skills/soft-skills.service';
import { SoftSkillsViolationService } from './screening/services/soft-skills-violation/soft-skills-violation.service';
import { ViolationTypeService } from './screening/services/violationType/violationType.service';
import { ScreeningService } from './screening/services/screening/screening.service';
import { ScreenerBucketsService } from './screening/services/screener-buckets/screener-buckets.service';
import { SkillTypeBucketService } from './screening/services/skillTypeBucketLookup/skill-type-bucket.service';
import { QuestionsService } from './services/questions/questions.service';
import { SkillTypesService } from './settings/screening/services/skillTypes.service';
import { BucketsService } from './settings/screening/services/buckets.service';
import { HttpErrorHandlerService } from './settings/screening/services/http-error-handler.service';
/** for in memory data service
  * executed, 'npm i angular-in-memory-web-api --save', remove from packange.json if not in use.
  */
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data/in-memory-data.service';
import { TrainerService } from '../../gambit-client/services/trainer/trainer.service';
import { GambitTraineeService } from '../../gambit-client/services/trainee/gambit-trainee.service';
import { GambitBatchService } from '../../gambit-client/services/batch/gambit-batch.service';
import { UrlService } from '../../gambit-client/services/urls/url.service';
import { GambitBatchUtilService } from '../../services/gambit-batch-util.service';

// N.T.
import { ApiService } from './util/api.service';

// pipes
import { GradeByTraineeByAssessmentPipe } from './pipes/grade-by-trainee-by-assessment.pipe';
import { GraphDataPipe } from './pipes/graph-data.pipe';
import { TierPipe } from './pipes/tier-pipe';
import { TrainerPipePipe } from './pipes/trainer-pipe.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { BatchByTrainerPipe } from './pipes/trainerbatch.pipe';
import { NoteByTraineeByWeekPipe } from './pipes/note-by-trainee-by-week.pipe';
import { DisplayBatchByYear } from './pipes/display-batch-by-year.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { ToolbarFilterPipe } from './pipes/toolbar-filter.pipe';
import { AddressToStringPipe } from './pipes/address-to-string.pipe';
import { TraineeSearch } from './pipes/trainee-search.pipe';
import { SearchPipe } from './screening/util/search.pipe';

// components
import { CaliberComponent } from './caliber.component';
import { HomeComponent } from './home/home.component';
import { AssessComponent } from './assess/assess.component';
import { NavComponent } from '../../nav/nav.component';
import { ManageComponent } from './manage/manage.component';
import { ReportsComponent } from './reports/reports.component';
import { AllCumulativeScoresComponent } from './reports/all-cumulative-scores/all-cumulative-scores.component';
import { TraineeTechSkillsComponent } from './reports/trainee-tech-skills/trainee-tech-skills.component';
import { ToolbarComponent } from './reports/toolbar/toolbar.component';
import { PanelComponent } from './panel/panel/panel.component';
import { OverallFeedbackComponent } from './reports/overall-feedback/overall-feedback.component';
import { TrainerProfilesComponent } from './settings/trainer-profile/trainer-profile.component';
import { PanelTableComponent } from './panel/panel-table/panel-table.component';
import { PanelSearchbarComponent } from './panel/panel-searchbar/panel-searchbar.component';
import { InterviewDetailsComponent } from './panel/interview-details/interview-details.component';
import { CreatePanelComponent } from './panel/create-panel/create-panel.component';
import { VpBarGraphComponent } from './home/vp-bar-graph/vp-bar-graph.component';
import { VpLineGraphComponent } from './home/vp-line-graph/vp-line-graph.component';
import { VpPanelGraphComponent } from './home/vp-panel-graph/vp-panel-graph.component';
import { SettingsComponent } from './settings/settings.component';
import { SkillsComponent } from './settings/skills/skills.component';
import { LocationsComponent } from './settings/locations/locations.component';
import { TrainersComponent } from './settings/trainers/trainers.component';
import { DeactivateLocationComponent } from './settings/locations/deactivatelocation/deactivatelocation.component';
import { EditlocationComponent } from './settings/locations/editlocation/editlocation.component';
import { CreatelocationComponent } from './settings/locations/createlocation/createlocation.component';
import { QualityComponent } from './quality/quality.component';
import { GraphComponent } from './reports/graph/graph.component';
import { TableComponent } from './reports/table/table.component';
import { PanelBatchAllTraineesComponent } from './reports/panel-batch-all-trainees/panel-batch-all-trainees.component';
import { QualityFeedbackComponent } from './quality/quality-feedback/quality-feedback.component';
import { BatchOverallLineChartComponent } from './reports/batch-overall-line-chart/batch-overall-line-chart.component';
import { PanelFeedbackComponent } from './reports/panel-feedback/panel-feedback.component';
import { AssessmentBreakdownComponent } from './reports/assessment-breakdown/assessment-breakdown.component';
import { WeeklyFeedbackComponent } from './reports/weekly-feedback/weekly-feedback.component';
import { WeeklyGradesComponent } from './reports/weekly-grades/weekly-grades.component';
import { WeeklyAuditComponent } from './reports/weekly-audit/weekly-audit.component';
import { WeeklyCumulativeScoreComponent } from './reports/weekly-cumulative-scores/weekly-cumulative-scores.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ReactivateLocationComponent } from './settings/locations/reactivatelocation/reactivatelocation.component';
import { BarGraphModalComponent } from './home/vp-bar-graph/bar-graph-modal/bargraphmodal.component';
import { ReportsService } from './services/reports.service';
import { GeneralFeedbackComponent } from './panel/general-feedback/general-feedback.component';
import { TechnicalFeedbackComponent } from './panel/technical-feedback/technical-feedback.component';
import { QcDoughnutComponent } from './reports/qc-doughnut/qc-doughnut.component';
import { BatchModalComponent } from './manage/batch/batch-modal.component';
import { PanelOverallFeedbackComponent } from './panel/overall-feedback/panel-overall-feedback.component';
import { FeedbackIconComponent } from './quality/feedback-icon/feedback-icon.component';
import { QualityOverallFeedbackComponent } from './quality/quality-overall-feedback/quality-overall-feedback.component';
import { TraineeLineChartComponent } from './reports/trainee-line-chart/trainee-line-chart.component';
import { ScreeningComponent } from './screening/components/screening/screening.component';
import { CandidatesScreeningListComponent } from './screening/components/candidates-screening-list/candidates-screening-list.component';
import { QuestionsTableComponent } from './screening/components/questions-table/questions-table.component';
import { ArrToStringPipe } from './pipes/arr-to-string.pipe';
import { DeleteBatchModalComponent } from './manage/delete-batch-modal/delete-batch-modal.component';
import { CannotDeleteModalComponent } from './manage/cannot-delete-modal/cannot-delete-modal.component';
import { DeleteTraineeModalComponent } from './manage/delete-trainee-modal/delete-trainee-modal.component';
import { CannotDeleteTraineeModalComponent } from './manage/cannot-delete-trainee-modal/cannot-delete-trainee-modal.component';
import { FinalReportComponent } from './screening/components/final-report/final-report.component';
import { IntroductionComponent } from './screening/components/introduction/introduction.component';
import { AnswerComponent } from './screening/components/answer/answer.component';
import { PassFailComponent } from './screening/components/pass-fail/pass-fail.component';
import { ViolationFlagComponent } from './screening/components/violation-flag/violation-flag.component';
import { ScheduleScreeningService } from './screening/services/schedule-screening/schedule-screening.service';
import { ScreeningConfigComponent } from './settings/screening/screening.component';
import { SkillTypesComponent } from './settings/screening/skillTypes/skillTypes.component';
import { BucketComponent } from './settings/screening/bucket/bucket.component';
import { CategoriesComponent } from './settings/screening/categories/categories.component';
import { QuestionComponent } from './settings/screening/question/question.component';
import { CategoryFilterPipe } from './settings/screening/categories/categories.filter';
import { PDFService } from './services/pdf.service';
import { ReportingService } from './services/reporting.service';
import { CategoryService } from './services/category/category.service';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';

export const Dependencies = {
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forChild(routes),
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule.forRoot(),
    NgxPaginationModule,
    BrowserAnimationsModule
  ],
  declarations: [
    // pipes
    GraphDataPipe,
    PanelBatchAllTraineesComponent,
    GradeByTraineeByAssessmentPipe,
    DisplayBatchByYear,
    BatchByTrainerPipe,
    NoteByTraineeByWeekPipe,
    TierPipe,
    TrainerPipePipe,
    OrderByPipe,
    GradeByTraineeByAssessmentPipe,
    BatchByTrainerPipe,
    GeneralFeedbackComponent,
    TechnicalFeedbackComponent,
    AddressToStringPipe,
    GraphDataPipe,
    OrderByPipe,
    FilterByPipe,
    ToolbarFilterPipe,
    TraineeSearch,
    ArrToStringPipe,
    SearchPipe,
    CategoryFilterPipe,

    // components
    // PaginationControlsComponent,
    CaliberComponent,
    HomeComponent,
    AssessComponent,
    ManageComponent,
    ReportsComponent,
    AllCumulativeScoresComponent,
    VpBarGraphComponent,
    VpLineGraphComponent,
    VpPanelGraphComponent,
    SettingsComponent,
    TrainersComponent,
    LocationsComponent,
    DeactivateLocationComponent,
    EditlocationComponent,
    CreatelocationComponent,
    PanelComponent,
    QualityComponent,
    TraineeTechSkillsComponent,
    SkillsComponent,
    ToolbarComponent,
    GraphComponent,
    TableComponent,
    TrainerProfilesComponent,
    PanelComponent,
    OverallFeedbackComponent,
    QualityFeedbackComponent,
    PanelBatchAllTraineesComponent,
    BatchOverallLineChartComponent,
    AssessmentBreakdownComponent,
    WeeklyFeedbackComponent,
    WeeklyGradesComponent,
    PanelFeedbackComponent,
    WeeklyAuditComponent,
    WeeklyCumulativeScoreComponent,
    QcDoughnutComponent,
    ReactivateLocationComponent,
    AlertsComponent,
    BarGraphModalComponent,
    PanelBatchAllTraineesComponent,
    PanelTableComponent,
    PanelSearchbarComponent,
    CreatePanelComponent,
    InterviewDetailsComponent,
    BatchModalComponent,
    GeneralFeedbackComponent,
    TechnicalFeedbackComponent,
    PanelOverallFeedbackComponent,
    FeedbackIconComponent,
    QualityOverallFeedbackComponent,

        // components
        // PaginationControlsComponent,
        CaliberComponent,
        HomeComponent,
        AssessComponent,
        ManageComponent,
        ReportsComponent,
        AllCumulativeScoresComponent,
        VpBarGraphComponent,
        VpLineGraphComponent,
        VpPanelGraphComponent,
        SettingsComponent,
        // CategoriesComponent,
        TrainersComponent,
        LocationsComponent,
        DeactivateLocationComponent,
        EditlocationComponent,
        CreatelocationComponent,
        PanelComponent,
        QualityComponent,
        TraineeTechSkillsComponent,
        SkillsComponent,
        ToolbarComponent,
        GraphComponent,
        TableComponent,
        TrainerProfilesComponent,
        PanelComponent,
        OverallFeedbackComponent,
        QualityFeedbackComponent,
        PanelBatchAllTraineesComponent,
        BatchOverallLineChartComponent,
        AssessmentBreakdownComponent,
        WeeklyFeedbackComponent,
        WeeklyGradesComponent,
        PanelFeedbackComponent,
        WeeklyAuditComponent,
        WeeklyCumulativeScoreComponent,
        QcDoughnutComponent,
        ReactivateLocationComponent,
        AlertsComponent,
        BarGraphModalComponent,
        PanelBatchAllTraineesComponent,
        PanelTableComponent,
        PanelSearchbarComponent,
        CreatePanelComponent,
        InterviewDetailsComponent,
        BatchModalComponent,
        GeneralFeedbackComponent,
        TechnicalFeedbackComponent,
        PanelOverallFeedbackComponent,
        FeedbackIconComponent,
        QualityOverallFeedbackComponent,
        GeneralFeedbackComponent,
        TechnicalFeedbackComponent,
        QcDoughnutComponent,
        TraineeLineChartComponent,
        DeleteBatchModalComponent,
        CannotDeleteModalComponent,
        DeleteTraineeModalComponent,
        CannotDeleteTraineeModalComponent,
        ScreeningConfigComponent,
        CandidatesScreeningListComponent,
        QuestionsTableComponent,
        FinalReportComponent,
        IntroductionComponent,
        AnswerComponent,
        PassFailComponent,
        ViolationFlagComponent,
        SkillTypesComponent,
        BucketComponent,
        QuestionComponent,
        ScreeningComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpringInterceptor, multi: true },  // interceptor for all HTTP requests
    BatchService,
    TrainerService,
    TraineeService,
    AssessmentService,
    RouteService,
    PanelService,
    RouteService,
    QuestionService,
    QuestionsService,
    BucketsService,
    CandidateService,
    SkillTypeService,
    SkillTypesService,
    QuestionScoreService,
    QuestionsToBucketsUtil,
    ScreeningService,
    SkillTypeBucketService,
    ScheduleScreeningService,
    // ActivatedRoute,
    GradeService,
    HttpClient,
    NoteService,
    NgbModal,
    NgbModalStack,
    NgbTabset,
    VpHomeLineGraphService,
    VpHomeSelectorService,
    ColorService,
    TrainerService,
    LocationService,
    GranularityService,
    AlertsService,
    VpHomeBarGraphService,
    VpHomePanelGraphService,
    EvaluationService,
    TrainingTypeService,
    ReportsService,
    QCStatusService,
    TraineeStatusService,
    ApiService,
    ReportingService,
    PDFService,
    PanelSearchbarComponent,
    NgbActiveModal,
    { provide: Router, useValue: {} },
    GranularityService,
    GambitBatchService,
    GambitBatchUtilService,
    UrlService,
    CategoryService
  ],
  bootstrap: [
    // TrainersComponent
    CaliberComponent
  ],
  exports: [
    TraineeTechSkillsComponent,
    TraineeLineChartComponent,
    ViolationFlagComponent,
    PaginatePipe,
  ],
  entryComponents: [
    BarGraphModalComponent,
    BatchModalComponent,
  ],
};
