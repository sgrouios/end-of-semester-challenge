import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/models/member';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  login(form){
    console.log(form);
    //Attempt to login
    this.dataService.login(form)
    .then((response: Member) => {
      console.log("Successful login");
      console.log(response);
      //Set activeMember in dataService if successful
      this.dataService.member.next(response);
      this.dataService.userType = response.userType;
      //Route to home
      this.router.navigate(['']);
    })
    .catch((err) => alert(err));
  }

}
