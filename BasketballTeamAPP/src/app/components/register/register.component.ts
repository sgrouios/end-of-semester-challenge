import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/models/member';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  register(form){
    let member = new Member();
    member = form;
    member.pending = true;
    console.log(member);
    //Attempt to Register member
    this.dataService.register(form)
    .then((res) => {
      console.log("Successful Registration");
      //Route to login
      this.router.navigate(['login']);
    })
    .catch((err) => alert(err));
  }
}
