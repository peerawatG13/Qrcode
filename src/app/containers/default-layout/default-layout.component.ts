
import { Component , OnInit } from '@angular/core';
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
  constructor(){}

  ngOnInit(): void {
   
  }
  
  
  
}
