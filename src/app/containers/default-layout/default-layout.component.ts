
import { HttpClient } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import liff from '@line/liff/dist/lib';
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
   
  }
  liffline(){
    liff.init({
      liffId:'1656299107-xQZbkJjd'
    }).then(() => {
      if(liff.isLoggedIn()){
        liff.getProfile().then(proflie => {
          console.log(proflie);
        })
      }else{
        liff.login();
      }
    })
  }
  

  
  
}
