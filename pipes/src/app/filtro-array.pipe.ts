import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray',
  standalone: false
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value.length === 0 || args === undefined){
      return value;
    }

    let filter = args.toLocaleLowerCase();
    return value.filter(
      (v:string ) => v.toLocaleLowerCase().includes(filter)
    );
  }

}
