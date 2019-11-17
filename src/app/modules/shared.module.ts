import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from '../components/clock/clock.component';

// not lazy loading

@NgModule({
  declarations: [ClockComponent],
  imports: [
    CommonModule
  ],
  // החצנת רכיב כדי שמודולים אחרים יוכלו להשתמש בו
  exports: [ClockComponent] 
})
export class SharedModule { }
