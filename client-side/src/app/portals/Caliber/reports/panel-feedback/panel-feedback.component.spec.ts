import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Dependencies } from '../../caliber.test.module';
import { PanelFeedbackComponent } from './panel-feedback.component';
import { OrderByPipe } from '../../pipes/order-by.pipe';
import { GranularityService } from '../services/granularity.service';
import { PanelService } from '../../services/panel.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertsService } from '../../services/alerts.service';

describe('PanelFeedbackComponent', () => {
  let component: PanelFeedbackComponent;
  let fixture: ComponentFixture<PanelFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }), 1440000);

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit() cannot verify data currently, but the variables should be true', () => {
    component.ngOnInit();
    expect(component.panelList).toBeTruthy();
    expect(component['traineeSubscription']).toBeTruthy();
    expect(component['panelSubscription']).toBeTruthy();
  });

  it('ngOnDestroy()', () => {
    component.ngOnDestroy();
  });
});
