import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-angular',
  templateUrl: './start-angular.component.html',
  styleUrls: ['./start-angular.component.css']
})
export class StartAngularComponent implements OnInit {
  imgUrl : string = "https://routeegypt.com/start-angular/assets/img/avataaars.svg";
  constructor() { }

  ngOnInit(): void {
  }

}
