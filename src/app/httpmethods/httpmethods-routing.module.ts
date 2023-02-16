import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletemethodComponent } from './deletemethod/deletemethod.component';
import { GetmethodComponent } from './getmethod/getmethod.component';
import { PostmethodComponent } from './postmethod/postmethod.component';
import { PutmethodComponent } from './putmethod/putmethod.component';

const routes: Routes = [
  {path:'deletemethod', component:DeletemethodComponent},
  {path:'getmethod', component:GetmethodComponent},
  {path:'postmethod', component:PostmethodComponent},
  {path:'putmethod', component:PutmethodComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpmethodsRoutingModule { }
