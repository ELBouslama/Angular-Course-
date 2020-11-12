import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string, ): string {
   if(value.trim().length == 0 )
   return "rotating_card_profile.png" ; 

   return value ; 
  }

}
