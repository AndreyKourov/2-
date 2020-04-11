import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-zadachi',
  templateUrl: './zadachi.component.html',
  styleUrls: ['./zadachi.component.css']
})
export class ZadachiComponent implements OnInit {

  constructor(
    private http: HttpClient,
  ) { }

  zadachis = []

  ngOnInit(): void {

    this.http.get("http://iilinov-n.myjino.ru/tasks")
      .subscribe( (zadachis: any[]) => {
        this.zadachis = zadachis
      });
  }

}
