import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public url: string;
  public data$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(public http: HttpClient) {
    this.url = 'http://localhost:8080';
  }

  searchCompany() {
    return this.http
      .get(this.url + '/fetchstock')
      .toPromise()
      .catch()
  }

  getEvents() {
    this.searchCompany().then(data => {
      this.setData(data)
    }).catch(err => {
      console.log(err)
    })
  }

  setData(data) {
    this.data$.next(data);
  }
}
