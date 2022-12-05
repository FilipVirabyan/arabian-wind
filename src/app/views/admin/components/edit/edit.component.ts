import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  productForm = this._fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    top_notes: new FormArray([
      this.getNewNote()
    ]),
    middle_notes: new FormArray([
      this.getNewNote()
    ]),
    base_notes: new FormArray([
      this.getNewNote()
    ]),
    firstSlider: this._fb.group({
      first: '',
      second: ''
    }),
    secondSlider: this._fb.group({
      first: '',
      second: ''
    }),
    thirdSlider: this._fb.group({
      first: '',
      second: ''
    }),
  })

  constructor(private _fb: FormBuilder,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  addNote(formArray: any) {
    console.log(this.productForm.get(formArray));
    (this.productForm.get(formArray) as FormArray).push(this.getNewNote())
  }

  removeNote(formArray: FormArray, index: number) {
    formArray.removeAt(index)
  }

  getNewNote(): FormGroup {
    return this._fb.group({
      name: ['test', Validators.required],
      image: ['', Validators.required],
      file: ['', Validators.required]
    })
  }

  get topNotesControl(): FormArray {
    return this.productForm.get('top_notes') as FormArray
  }

  get middleNotesControl(): FormArray {
    return this.productForm.get('middle_notes') as FormArray
  }

  get baseNotesControl(): FormArray {
    return this.productForm.get('base_notes') as FormArray
  }

  async changeNoteImage(formGroup: any, event: EventTarget | null) {
    const files = (event as HTMLInputElement).files
    if (files && files.item(0)) {
      const file = files.item(0) as File
      const image = await EditComponent.FileToBase64(file);
      (formGroup as FormGroup).patchValue({image, file})
    }
  }

  /**
   * convert File object to base64
   *
   * @param file the File object
   *
   * @return Promise with base64
   */
  static FileToBase64(file: File): Promise<string> {
    return new Promise((resolve) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result!.toString());
      fileReader.readAsDataURL(file);
    });
  }

}
