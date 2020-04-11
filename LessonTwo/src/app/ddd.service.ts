import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DddService {

  constructor(
    private http: HttpClient,
  ) { }

  getOl() {
    return this.http.get("http://iilinov-n.myjino.ru/tasks")

  }

}
