import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{ map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private baseUrl :string = "https://localhost:7107/api/User";

  constructor( private http :HttpClient) { }
  getProduct(){
    return this.http.get<any>("https://localhost:7107/api/Card").pipe(map((res:any)=>{
      return res;
    }))
  }
  getUser(){
    return this.http.get<any>(this.baseUrl);
  }

}
