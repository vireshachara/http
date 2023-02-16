import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebounceoperatorComponent } from './debounceoperator/debounceoperator.component';
import { FromeventoperatorComponent } from './fromeventoperator/fromeventoperator.component';
import { FromoperatorComponent } from './fromoperator/fromoperator.component';
import { IntervaloperatorComponent } from './intervaloperator/intervaloperator.component';
import { OfoperatorComponent } from './ofoperator/ofoperator.component';

const routes: Routes = [
  {path:'ofoperator', component:OfoperatorComponent},
  {path:'fromoperator', component:FromoperatorComponent},
  {path:'fromeventoperator', component:FromeventoperatorComponent},
  {path:'intervaloperator', component:IntervaloperatorComponent},
  {path:'debounceoperator', component:DebounceoperatorComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
