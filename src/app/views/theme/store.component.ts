import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
// Import New
import { HttpClient} from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { title } from 'process';
@Component({
  templateUrl: 'store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor( private http : HttpClient ,   ) {}

  ngOnInit() {
    
  }
  
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
