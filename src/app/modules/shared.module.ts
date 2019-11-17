import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from '../components/clock/clock.component';
import { ZeroSymbolPipe } from '../pipes/zero-symbol.pipe';
import { ColoredDirective } from '../directives/colored.directive';
import { NumberToWordPipe } from '../pipes/number-to-word.pipe';
import { RotateDirective } from '../directives/rotate.directive';


// not lazy loading

@NgModule({
  declarations: [ClockComponent, ZeroSymbolPipe, NumberToWordPipe,ColoredDirective, RotateDirective], // לצורך הכרה פנימית במודול
  imports: [
    CommonModule
  ],
  // החצנת רכיב כדי שמודולים אחרים יוכלו להשתמש בו
  exports: [ClockComponent, ZeroSymbolPipe, NumberToWordPipe, ColoredDirective, RotateDirective] // לצורך החצנה למודולים אחרים
})
export class SharedModule { }
