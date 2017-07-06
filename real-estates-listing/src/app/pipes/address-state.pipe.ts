import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'addressState' })
export class AddressStatePipe implements PipeTransform {

  transform(value: string): string { 
    let stateArray = value.split(',');
    let state: string;

    stateArray.shift();
    state = stateArray.join();

    return (state.length < 20) ? state: state.slice(0, 20).concat('...');
  }

}
