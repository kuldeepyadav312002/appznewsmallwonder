import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-franchise-opportunity',
  templateUrl: './franchise-opportunity.component.html',
  styleUrls: ['./franchise-opportunity.component.scss']
})
export class FranchiseOpportunityComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToFranchise(){
    this.router.navigateByUrl('/franchise');
  }

}
