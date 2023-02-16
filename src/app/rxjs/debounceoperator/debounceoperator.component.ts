import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-debounceoperator',
  templateUrl: './debounceoperator.component.html',
  styleUrls: ['./debounceoperator.component.css'],
})
export class DebounceoperatorComponent implements OnInit {
  searchForm: any;

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name: new FormControl('Start Search'),
    });

    this.searchForm.get('name').valueChanges
    .pipe(debounceTime(3000)).subscribe((data: any) => {
      console.log(data);
    });
    // ----------------Without Debouncing-------------------
    // this.searchForm.get('name').valueChanges
    // .subscribe((data: any) => {
    //   console.log(data);
    // });
  }

  readValue() {}
}
