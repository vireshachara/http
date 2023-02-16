import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpmethodsComponent } from './httpmethods/httpmethods.component';
import { InterceptorsComponent } from './interceptors/interceptors.component';
import { ObservablesComponent } from './observables/observables.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [

  {path:'rxjs', component:RxjsComponent},
  {path:'observables', component:ObservablesComponent},
  {path:'httpmethods', component:HttpmethodsComponent},
  {path:'interceptors', component:InterceptorsComponent},
  {path:'video', component:VideoComponent},
  {
    path: 'rxjs',
    loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule)
  },
  {
    path: 'httpmethods',
    loadChildren: () => import('./httpmethods/httpmethods.module').then(m => m.HttpmethodsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
