import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerGuard implements CanActivate {

  constructor(private dataService: DataService) {}
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if(this.dataService.userType == "Manager"){
      return true
    }
    else{
      alert("Only Managers can add Fixtures");
      return false;
    }  
  }
}
