import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-fromeventoperator',
  templateUrl: './fromeventoperator.component.html',
  styleUrls: ['./fromeventoperator.component.css'],
})
export class FromeventoperatorComponent implements OnInit {
  @ViewChild('validate')
  validate: any;

  @ViewChild('getlink')
  getLinkData: any;

  constructor() {}

  ngOnInit(): void {}

  rxJsEventObservable() {
    const butObservable$ = fromEvent(this.validate?.nativeElement, 'click');
    butObservable$.subscribe((data) => {
      console.log(data);
    });
  }
  getEventObservable() {
    const linkObservable$ = fromEvent(this.getLinkData?.nativeElement, 'mouseover');
    linkObservable$.subscribe((data) => {
      console.log(data);
    });
  }
}
