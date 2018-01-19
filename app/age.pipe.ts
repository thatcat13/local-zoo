import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "animalAge",
  pure: false
})


export class AgePipe implements PipeTransform {

  transform(input:Animal[], currentAnimalAge) {
    var output: Animal[] = [];
      if (currentAnimalAge === 'allAnimals') {
        for (var i = 0; i < input.length; i++) {
          output.push(input[i]);
        }
      return output;
    } else if (currentAnimalAge === 'young') {
        for (var i = 0; i < input.length; i++) {
          if (input[i].age < 2) {
          output.push(input[i]);
          }
        }
      return output;
    } else {
      return input;
    }
  }//transform
}
