import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private fullname$ = new BehaviorSubject<string>("");
  private role$ = new BehaviorSubject<string>("");

  constructor() { }

  // getFullname(): Observable<string> {
  //   return this.fullname$.asObservable();
  // }

  // setFullname(fullname: string): void {
  //   this.fullname$.next(fullname);
  // }

  // getRole(): Observable<string> {
  //   return this.role$.asObservable();
  // }

  // setRole(role: string): void {
  //   this.role$.next(role);
  // }
}
