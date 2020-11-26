import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFixtureComponent } from './components/add-fixture/add-fixture.component';
import { FutureFixturesComponent } from './components/future-fixtures/future-fixtures.component';
import { LoginComponent } from './components/login/login.component';
import { PastFixturesComponent } from './components/past-fixtures/past-fixtures.component';
import { RegisterComponent } from './components/register/register.component';
import { ViewPendingComponent } from './components/view-pending/view-pending.component';
import { ViewTeamComponent } from './components/view-team/view-team.component';
import { AuthGuard } from './guards/auth.guard';
import { ManagerGuard } from './guards/manager.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'addFixture', component: AddFixtureComponent, canActivate: [ManagerGuard, AuthGuard]},
  {path: 'futureFixtures', component: FutureFixturesComponent, canActivate: [AuthGuard]},
  {path: 'playedFixtures', component: PastFixturesComponent, canActivate: [AuthGuard]},
  {path: 'viewTeam', component: ViewTeamComponent, canActivate: [AuthGuard]},
  {path: 'viewPending', component: ViewPendingComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
