import { Component, OnInit } from '@angular/core';
import { PortfolioApiService } from './../portfolio-api.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {
constructor( private _PortfolioApiService : PortfolioApiService) {}
  imgArr : any[] = [];

  ngOnInit(): void {

    this._PortfolioApiService.getApi().subscribe({
      next : (data) => {
        console.log(data);
        this.imgArr = data.Portfolio;
      } ,
      error : ( err)=>{
        console.log(err.message);
      }
    })

  }



}
