import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passDays'
})
export class PassDaysPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
