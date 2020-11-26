import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private dataService: DataService){}
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.dataService.member.value != null)
      return true;
    else
      return false;
  }
  
}
