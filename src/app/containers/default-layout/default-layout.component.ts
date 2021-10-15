
import { HttpClient } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import liff from '@line/liff/dist/lib';
import { profile } from 'console';
import { navItems } from '../../_nav';




@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})


export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  title : any =''
  pictureUrl: any = ''
  displayName: any = ''
  userId: any = ''
  idToken: any = ''
  

  constructor( private http :HttpClient){}

  ngOnInit(): void {
   this.initLine();
   console.log(this.runApp);
   
  }
  initLine(): void {
    liff.init({ liffId: '1656299107-xQZbkJjd' }, () => {
      if (liff.isLoggedIn()) {
        this.runApp();
      } else {
        liff.login();
      }
    }, err => console.error(err));
  }
  runApp(): void {
    const idToken = liff.getIDToken();
    this.idToken = idToken;
    liff.getProfile().then(profile => {
      console.log(profile);
      this.displayName = profile.displayName;
      this.pictureUrl = profile.pictureUrl;
      this.userId = profile.userId;
    }).catch(err => console.error(err));
  }
  
}
