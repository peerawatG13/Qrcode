// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreComponent } from './store.component';
import { StudentComponent } from './student.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule
  ],
  declarations: [
    StoreComponent,
    StudentComponent
  ]
})
export class ThemeModule { }
