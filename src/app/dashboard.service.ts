import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public userType:BehaviorSubject<string>= new BehaviorSubject<string>("")
  constructor() { }
}
