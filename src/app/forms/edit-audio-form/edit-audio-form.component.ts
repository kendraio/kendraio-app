import { Component, Input, OnInit } from '@angular/core';

const readFile = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      resolve(reader.result);
    };
    reader.onerror = function (error) {
      reject(error);
    };
  });
};


@Component({
  selector: 'app-edit-audio-form',
  templateUrl: './edit-audio-form.component.html',
  styleUrls: ['./edit-audio-form.component.scss']
})
export class EditAudioFormComponent implements OnInit {

  @Input() item;

  isLoading = false;


  constructor() { }

  ngOnInit() {
  }


  onFileChange(event) {
    this.isLoading = true;
    const file = event.target.files[0];
    readFile(file).then(enc => {
      this.item['file'] = enc;
      this.isLoading = false;
    });
  }

  onClipUpdate({ id, start, end }) {
    console.log({ id });
    if (!this.item['regions']) {
      this.item['regions'] = {};
    }
    if (!this.item['regions'][id]) {
      this.item['regions'][id] = { name: 'Clip' };
    }
    this.item.regions[id].start = start;
    this.item.regions[id].end = end;
    console.log(this.item.regions);
  }
}
