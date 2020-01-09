import { Component, OnInit } from '@angular/core';
import { SportsService } from 'src/app/services/sports.service'

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  givenName0: String
  familyName0 : String
  nationality0 : String
  status0 : String
  givenName1: String
  familyName1 : String
  nationality1 : String
  status1 : String
  givenName2: String
  familyName2 : String
  nationality2 : String
  status2 : String
  constructor(private sportsService: SportsService) { }

  ngOnInit() {
    this.getSports0();
    this.getSports1();
    this.getSports2();
  }

  getSports0(){
    this.sportsService.getSports().subscribe(res => {
      this.givenName0 = res[0].Driver.givenName
      this.familyName0 = res[0].Driver.familyName
      this.nationality0 = res[0].Driver.nationality
      this.status0 = res[0].status
    })
  }

  getSports1(){
    this.sportsService.getSports().subscribe(res => {
      this.givenName1 = res[1].Driver.givenName
      this.familyName1 = res[1].Driver.familyName
      this.nationality1 = res[1].Driver.nationality
      this.status1 = res[1].status
    })
  }

  getSports2(){
    this.sportsService.getSports().subscribe(res => {
      this.givenName2 = res[2].Driver.givenName
      this.familyName2 = res[2].Driver.familyName
      this.nationality2 = res[2].Driver.nationality
      this.status2 = res[2].status
    })
  }

}
