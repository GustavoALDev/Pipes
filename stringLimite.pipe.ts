import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringLimit'
})

export class stringLimit implements PipeTransform {
  transform(value: string | null | undefined): string | undefined  | null   {
    if(value){
      if(value !== null && value.length > 39) {
        return value.substring(0, 39) + '...';
      } else {
        return value;
      }
    }
    return value

  }
}

