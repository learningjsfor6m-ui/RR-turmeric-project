import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'charCheck',
})
export class CharPipe implements PipeTransform {
  transform(items:string, input: string = '', propertyName?: string): any {
    if(items){

    }

  }
}
