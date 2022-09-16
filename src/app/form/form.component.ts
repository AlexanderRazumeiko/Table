import { Component, OnInit } from '@angular/core';

import {Data, DataItem} from '../data/dataset'

import { VirtualTimeScheduler } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

 DataFilters = ["income", "outcome" , "loan" , "investment"];
 newData: DataItem[] = [];
 tabId = 0
 
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParamMap.subscribe((queryParams) => {
     this.tabId = Number(queryParams.get('tab'))
     const filter = this.DataFilters[this.tabId]
     this.newData = Data.data.filter(item => item.type === filter)
    })
  }
}
