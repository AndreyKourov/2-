import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


type Odin = {
  title: string,
  desc: string,
  minutes: string,
  hour: string,
}

@Component({
  selector: 'app-odn',
  templateUrl: './odn.component.html',
  styleUrls: ['./odn.component.css']
})
export class OdnComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
  ) { }

  zadachi: Odin = {
    title: '',
    desc: '',
    minutes: '',
    hour: '',
  }

  ngOnInit(): void {
    this.http.get("http://iilinov-n.myjino.ru/tasks/" + this.route.snapshot.paramMap.get('id'))
      .subscribe( (zadachi: Odin) => {
        this.zadachi = zadachi;
      } )
  }

}
