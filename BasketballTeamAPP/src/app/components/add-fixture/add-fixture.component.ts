import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-fixture',
  templateUrl: './add-fixture.component.html',
  styleUrls: ['./add-fixture.component.css']
})
export class AddFixtureComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  addFixture(form){
    console.log(form);
    this.dataService.addFixture(form)
    .then((res) => {
      alert("Fixture successfully added");
      this.router.navigate(['']);
    })
    .catch((err) => alert(err.error));
  }
}
