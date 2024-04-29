import { Component } from '@angular/core';

import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor( private auth:AuthService){}

  
  Logout(){
    if(confirm("Are you sure you want to logout")){
      this.auth.logout();
    }
    
  }
  
}
