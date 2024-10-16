import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { clone } from "lodash-es";
import { parse, ParseResult, ParseConfig } from "papaparse";
import { types } from "util";

@Component({
  selector: "app-csv-import-block",
  templateUrl: "./csv-import-block.component.html",
  styleUrls: ["./csv-import-block.component.scss"],
})
export class CsvImportBlockComponent implements OnInit, OnChanges {
  name: string;
  theFile: File; // hold our file

  @Input() config;
  @Input() context;
  @Input() model: any = {};
  @Output() output = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes): void {}

  openInput() {
    // your can use ElementRef for this later
    document.getElementById("fileInput").click();
  }

  fileChange(files: File[]) {
    if (files.length > 0) {
      this.theFile = files[0];
    }
  }

  upload() {
    // Why is this here? This file is never sent to the server!?
    console.log("sending this to server", this.theFile);
  }

  onFileChange(files: File[]) {
    // const file = event.target.files[0];

    const fileReader = new FileReader();
    fileReader.onload = (_) => {
      const { type, ...config } = this.config;
      const parsedData = parse(
        fileReader.result as string,
        config as ParseConfig,
      ) as ParseResult<any>;
      if (!!parsedData.data) {
        this.output.emit(parsedData.data);
        console.log(parsedData.data);
      } else {
        console.log(parsedData.errors);
      }
    };
    fileReader.readAsText(files[0]);
  }
}
