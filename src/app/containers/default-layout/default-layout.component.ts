import {Component , OnInit} from '@angular/core';
import { navItems } from '../../_nav';
import liff from '@line/liff';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;

  // line

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  
  ngOnInit(){
    
  }
  
}
