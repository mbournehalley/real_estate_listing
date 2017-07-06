import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'addressStreet' })
export class AddressStreetPipe implements PipeTransform {

  transform(value: string): string { 
    let street = value.split(',')[0]; 
    
    return (street.length < 20) ? street : street.slice(0, 20).concat('...');
  }

}
