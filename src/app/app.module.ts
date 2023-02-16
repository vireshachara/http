import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PostmethodComponent } from './httpmethods/postmethod/postmethod.component';
import { GetmethodComponent } from './httpmethods/getmethod/getmethod.component';
import { PutmethodComponent } from './httpmethods/putmethod/putmethod.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ObservablesComponent } from './observables/observables.component';
import { DebounceoperatorComponent } from './rxjs/debounceoperator/debounceoperator.component';
import { HttpmethodsComponent } from './httpmethods/httpmethods.component';
import { DeletemethodComponent } from './httpmethods/deletemethod/deletemethod.component';
import { InterceptorsComponent } from './interceptors/interceptors.component';
import { VideoComponent } from './video/video.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";



@NgModule({
  declarations: [
    AppComponent,
    PostmethodComponent,
    GetmethodComponent,
    PutmethodComponent,
    RxjsComponent,
    ObservablesComponent,
    DebounceoperatorComponent,
    HttpmethodsComponent,
    DeletemethodComponent,
    InterceptorsComponent,
    VideoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    NgMultiSelectDropDownModule.forRoot(),

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
