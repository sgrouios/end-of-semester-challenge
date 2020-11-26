import { Component, OnInit } from '@angular/core';
import { MemberFee } from 'src/app/models/member-fee';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.css']
})
export class ViewTeamComponent implements OnInit {

  members: MemberFee[];

  constructor(private dataService: DataService) {
    this.dataService.getMembersCourtFee()
    .then((members: MemberFee[]) => 
    {
      console.log(members);
      this.members = members;
    })
    .catch((err) => alert(err));
   }

  ngOnInit(): void {
  }

}
