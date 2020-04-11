import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DddService } from '../ddd.service';


type Odin = {
  title: string,
  desc: string,
  minutes: string,
  hour: string,
  id: string,
}


@Component({
  selector: 'app-zadachi',
  templateUrl: './zadachi.component.html',
  styleUrls: ['./zadachi.component.css']
})
export class ZadachiComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private ddd: DddService,
  ) { }

  zadachis:Odin[] = []

  ngOnInit(): void {

    this.ddd.getOl().subscribe( (zadachis: Odin[]) => {
      this.zadachis = zadachis
    });
  }

}
