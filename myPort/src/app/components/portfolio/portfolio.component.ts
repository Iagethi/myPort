import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/shared/services/portfolio.model';
import { PortfolioService } from 'src/app/shared/services/portfolio.service';
import { trigger, transition, animate, style, animateChild, query, stagger } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('list',[
      transition(':enter',[
        query('@items', stagger(60, animateChild()))
      ])
    ]),
    trigger('items', [
      transition(':enter', [
        style({transform:'scale(0)', opacity: 0}),
        animate('0.350s cubic-bezier(.8,0.6,0.2,1.5)'),
        style({transform:'scale(1)', opacity:1})
      ])
    ])
  ]
})
export class PortfolioComponent implements OnInit {

  portfolios: Portfolio[];

  constructor(private portfolioSvc: PortfolioService, private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.portfolioSvc.get().subscribe(data=>{
      this.portfolios = data;
    })
  }


}
