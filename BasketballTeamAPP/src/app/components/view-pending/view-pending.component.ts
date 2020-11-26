import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-view-pending',
  templateUrl: './view-pending.component.html',
  styleUrls: ['./view-pending.component.css']
})
export class ViewPendingComponent implements OnInit {

  pendingMembers: Member[];
  
  constructor(private dataService: DataService) 
  { 
    this.dataService.getPendingMembers()
    .then((members: Member[]) => this.pendingMembers = members)
    .catch(() => alert("Something went wrong"));
  }

  ngOnInit(): void {
  }

  approveMember(form){
    this.dataService.approvePendingMember(form.memberId)
    .then(() => alert("Member approved"))
    .catch(() => alert("Something went wrong"));
  }

}
