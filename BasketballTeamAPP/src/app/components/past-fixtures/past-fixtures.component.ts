import { Component, OnInit } from '@angular/core';
import { Fixture } from 'src/app/models/fixture';
import { Member } from 'src/app/models/member';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-past-fixtures',
  templateUrl: './past-fixtures.component.html',
  styleUrls: ['./past-fixtures.component.css']
})
export class PastFixturesComponent implements OnInit {

  fixtures: Fixture[];
  memberList: Member[];
  show: boolean = false;
  
  constructor(private dataService: DataService) {
    this.fixtures = [];
    this.memberList = [];
    //Get played fixtures
    this.dataService.getPlayedFixtures()
    .then((fixtures: Fixture[]) => {
      console.log(fixtures);
      this.fixtures = fixtures;
    })
    .catch((err) => alert("Error in get played"));

    //Get members
    this.dataService.getMembers()
      .then((members: Member[]) => { this.memberList = members })
      .catch((err) => alert(err));
   }

  ngOnInit(): void {
  }

  enterCourtFee(courtFee){
    courtFee.payeeId = parseInt(courtFee.payeeId);
    console.log(courtFee);
    this.dataService.enterCourtFee(courtFee)
      .then(() => alert("Court Fee successfully entered"))
      .catch((err) => alert(err));
  }

  changeShow(){
    this.show = !this.show;
  }
}
