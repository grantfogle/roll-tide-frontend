import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }


  ngOnInit() {
    this.httpClient.get('localhost:3000')
      .toPromise()
      .then(data => {
        console.log(data)
      })
  }

}
