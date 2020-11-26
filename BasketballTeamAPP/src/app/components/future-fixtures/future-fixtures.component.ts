import { Component, OnInit } from '@angular/core';
import { Fixture } from 'src/app/models/fixture';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-future-fixtures',
  templateUrl: './future-fixtures.component.html',
  styleUrls: ['./future-fixtures.component.css']
})
export class FutureFixturesComponent implements OnInit {

  fixtureId: number;
  fixtures: Fixture[];

  constructor(private dataService: DataService) {
    this.fixtures = [];
    //Call API to get fixtures
    this.dataService.getFutureFixtures()
      .then((fixtures: Fixture[]) => this.fixtures = fixtures)
      .catch((err) => alert(err));
  }

  ngOnInit(): void {
  }

  deleteFixture() {
    if (!this.fixtureId) {
      alert("Choose a Fixture Id to delete");
    }
    else {
      this.dataService.deleteFixture(this.fixtureId)
        .then(() => {
          this.dataService.getFutureFixtures()
            .then((fixtures: Fixture[]) => this.fixtures = fixtures)
            .catch((err) => alert("Error getting future fixtures"));
          alert("Fixture deleted");
        })
        .catch((err) => alert("Something went wrong"));
    }
  }
}
