import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { LazyComponentComponent } from './lazy-component/lazy-component.component';
import { LargeComponent } from './large/large.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [LargeComponent],
  imports: [
    CommonModule, MatIconModule
  ], exports: [MatIconModule]
})
export class LazyModule {
  static getLargeComponent = () => LargeComponent;
 }
