import {Pipe, PipeTransform} from '@angular/core';
import {BaseNote, MiddleNote, Notes, TopNote} from '../../../core/models';

@Pipe({
  name: 'getNoteName'
})
export class GetNoteNamePipe implements PipeTransform {

  transform(value: TopNote[] | MiddleNote[] | BaseNote[]): unknown {
    return value.map(note => note.name).join(', ')
  }

}
