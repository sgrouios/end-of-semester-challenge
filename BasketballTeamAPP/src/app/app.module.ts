import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddFixtureComponent } from './components/add-fixture/add-fixture.component';
import { FutureFixturesComponent } from './components/future-fixtures/future-fixtures.component';
import { PastFixturesComponent } from './components/past-fixtures/past-fixtures.component';
import { ViewTeamComponent } from './components/view-team/view-team.component';
import { ViewPendingComponent } from './components/view-pending/view-pending.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddFixtureComponent,
    FutureFixturesComponent,
    PastFixturesComponent,
    ViewTeamComponent,
    ViewPendingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
