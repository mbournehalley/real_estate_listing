import { Component, OnInit }  from '@angular/core';

import { RealEstate }         from '../model/real-estate';
import { ApiBackendService }  from '../service/api-backend.service';
import { OrderByPipe }        from '../pipes/orderBy.pipe';

@Component({
  selector: 'app-real-estates-listings',
  styleUrls: ['./real-estates-listings.component.css'],
  providers: [ApiBackendService],
  templateUrl: './real-estates-listings.component.html',
 
})
export class RealEstatesListingsComponent implements OnInit {
  public order: string = 'Price';

  errorMessage: string;
  realEstates: RealEstate[];
  mode = 'Observable';
  
  constructor(private apiBackendService: ApiBackendService) { }

  ngOnInit() { this.getRealEstate(); }

  getRealEstate(): void { 
    this.apiBackendService
      .getRealEstate()
      .subscribe(
        realEstates => this.realEstates = realEstates,
        error => this.errorMessage = <any>error
      ); 
  }

  orderBy() : void {

  }
}