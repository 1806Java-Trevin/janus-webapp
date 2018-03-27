import { Routes } from '@angular/router';

// components
import { CaliberComponent } from './caliber.component';
import { HomeComponent } from './home/home.component';
import { AssessComponent } from './assess/assess.component';
import { ManageComponent } from './manage/manage.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { CategoriesComponent } from './settings/categories/categories.component';
import { LocationsComponent } from './settings/locations/locations.component';
import { TrainersComponent } from './settings/trainers/trainers.component';
import { DeactivateTrainerComponent } from './settings/trainers/deactivatetrainer/deactivatetrainer.component';
import { QualityComponent } from './quality/quality.component';
import { PanelComponent } from './panel/panel/panel.component';
import { TrainerProfilesComponent } from './settings/trainer-profile/trainer-profile.component';
import { RoleGuard, roles } from '../../role-guard';

import {ScreeningComponent} from './settings/screening/screening.component'
import { Component } from '@angular/core';
import {BucketComponent} from './settings/screening/bucket/bucket.component';
import {SkillTypeBucketsComponent} from './settings/screening/skillType-buckets/skillType-buckets.component';

export const routes: Routes = [
  {
    path: '',
    component: CaliberComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [RoleGuard],
        data: { roles: [roles.panelRole, roles.qcRole, roles.stagingRole, roles.trainerRole, roles.vpRole] }
      },
      {
        path: 'manage',
        component: ManageComponent,
        canActivate: [RoleGuard],
        data: { roles: [roles.panelRole, roles.qcRole, roles.trainerRole, roles.vpRole] }
      },
      {
        path: 'assess',
        component: AssessComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [
            roles.vpRole,
            roles.trainerRole
          ]
        }
      },
      {
        path: 'quality',
        component: QualityComponent,
        canActivate: [RoleGuard],
        data: { roles: [roles.panelRole, roles.qcRole, roles.stagingRole, roles.trainerRole, roles.vpRole] }
      },
      {
        path: 'reports',
        component: ReportsComponent,
        canActivate: [RoleGuard],
        data: { roles: [roles.panelRole, roles.qcRole, roles.stagingRole, roles.trainerRole, roles.vpRole] }
      },
      {
        path: 'panel',
        component: PanelComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [
            roles.vpRole,
            roles.panelRole
          ]
        }
      },
      {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [roles.panelRole, roles.qcRole, roles.stagingRole, roles.trainerRole, roles.vpRole]
        },
        children: [
          {
            path: 'categories',
            component: CategoriesComponent
          },
          {
            path: 'locations',
            component: LocationsComponent
          },
          {
            path: 'trainers',
            component: TrainersComponent
          },
          {
            path: 'trainer-profile',
            component: TrainerProfilesComponent,
          },
          {
            path:'screening',
            component: ScreeningComponent,
            children:[

            ]
          },
          {
<<<<<<< HEAD
            //path: 'screening/category',
            path: 'category',
=======
           path: 'screening/category',
>>>>>>> e8718facc632241d058a542b5507c38853592048
            component: BucketComponent
          },
          {
            path:'screening/skillTypeTopics',
            component: SkillTypeBucketsComponent,
          }
        ]
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/Caliber/home'
      }
    ]
  }
];
