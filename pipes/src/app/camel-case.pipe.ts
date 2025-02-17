import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
  standalone: false
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any[]): any {
    let values = value.split(' ');
    let result = '';

    for(let v of values){
      result += this.capitlize(v) + ' ';
    }

    return result;
  }

  capitlize(value: string){
    return value.substr(0,1).toUpperCase() +
      value.substr(1).toLowerCase()
  }

}
