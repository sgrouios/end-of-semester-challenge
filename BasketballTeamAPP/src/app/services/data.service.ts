import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Fixture } from '../models/fixture';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL: string = "http://stephenchallenge-env.eba-ccnvpz2m.us-east-1.elasticbeanstalk.com/api/";
  //apiURL: string = "https://localhost:5001/api/";
  member: BehaviorSubject<Member>;
  userType: string;

  constructor(private _http: HttpClient) { 
    this.member = new BehaviorSubject(null);
  }

  login(credentials) {
    return new Promise((resolve, reject) => {
      this._http.post<Member>(this.apiURL + "Basketball/login", credentials).subscribe(
        res => {
          resolve(res);
        },
        err => {
          reject(err.error);
        });
    })
  }

  register(credentials: Member) {
    return new Promise((resolve, reject) => {
      this._http.post(this.apiURL + "Basketball/registerMember", credentials).subscribe(
        res => {
          resolve(res);
        },
        err => {
          reject(err.error);
        });
    })
  }

  addFixture(fixtureDetails) {
    return new Promise((resolve, reject) => {
      this._http.post(this.apiURL + "Basketball/addFixture", fixtureDetails).subscribe(
        res => {
          resolve(res);
        },
        err => {
          reject(err.error);
        });
    })
  }

  getPlayedFixtures() {
    return new Promise((resolve, reject) => {
      this._http.get<Fixture[]>(this.apiURL + "Basketball/playedFixtures").subscribe(
        res => {
          resolve(res);
        },
        err => {
          reject(err.error);
        });
    })
  }

  getFutureFixtures() {
    return new Promise((resolve, reject) => {
      this._http.get<Fixture[]>(this.apiURL + "Basketball/futureFixtures").subscribe(
        res => {
          resolve(res);
        },
        err => {
          reject(err.error);
        });
    })
  }

  deleteFixture(fixtureId: number) {
    return new Promise((resolve, reject) => {
      this._http.delete(this.apiURL + "Basketball/deleteFixture/" + fixtureId).subscribe(
        res => {
          resolve(res);
        },
        err => {
          reject(err);
        });
    })
  }

  getMembers() {
    return new Promise((resolve, reject) => {
      this._http.get<Member[]>(this.apiURL + "Basketball/getMembers").subscribe(
        res => {
          resolve(res);
        },
        err => {
          reject(err.error);
        });
    })
  }

  enterCourtFee(courtFee) {
    return new Promise((resolve, reject) => {
      this._http.post(this.apiURL + "Basketball/enterCourtFee", courtFee).subscribe(
        res => {
          resolve(res);
        },
        err => {
          reject(err.error);
        });
    })
  }


}
