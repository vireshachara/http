import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { OfoperatorComponent } from './ofoperator/ofoperator.component';
import { FromoperatorComponent } from './fromoperator/fromoperator.component';
import { FromeventoperatorComponent } from './fromeventoperator/fromeventoperator.component';
import { IntervaloperatorComponent } from './intervaloperator/intervaloperator.component';
// import { DebounceoperatorComponent } from './debounceoperator/debounceoperator.component';


@NgModule({
  declarations: [
    OfoperatorComponent,
    FromoperatorComponent,
    FromeventoperatorComponent,
    IntervaloperatorComponent,
    // DebounceoperatorComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { }
