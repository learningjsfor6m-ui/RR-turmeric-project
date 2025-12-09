import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'charCheck',
})
export class CharPipe implements PipeTransform {
  transform(errors: any,field: 'email' | 'password'): any {
    if (!errors) return '';

  if (errors['required']) {
    return `${field} is required`;
  } else if (errors['minlength']) {
    return `${field} should be  minimum has 6 length`;
  } else if (errors['pattern']) {
    return `${field} should be patternised`;
  }else if(errors['email']){
return `${field} should be email`;
  }
  return '';
  }
}
