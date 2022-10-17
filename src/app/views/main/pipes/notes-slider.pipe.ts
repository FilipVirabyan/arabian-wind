import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notesSlider'
})
export class NotesSliderPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]) {
  }

}
