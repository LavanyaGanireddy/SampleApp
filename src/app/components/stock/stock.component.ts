import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  public stock = [];
  public scan = false;
  public rows;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.rows = [];

    this.dataService.data$.subscribe(data => {
      this.rows = data;
    });
    // this.stock = [
    //   {
    //     company: 'abc', user: 'abc'
    //   }, {
    //     company: 'abc1', user: 'abc1'
    //   }, {
    //     company: 'abc2', user: 'abc2'
    //   }, {
    //     company: 'abc3', user: 'abc3'
    //   }
    // ]
  }

  submit() {
    this.scan = true;
  }

}
