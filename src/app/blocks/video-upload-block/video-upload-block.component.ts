import { Component, OnInit, Input, Output, EventEmitter, Directive } from '@angular/core';
import {clone, get, isObject} from 'lodash-es';
import { BaseBlockComponent } from '../base-block/base-block.component';
import { VimeoUploadService } from './vimeo-upload.service';
import { map, expand } from 'rxjs/operators';
import { EMPTY } from 'rxjs';


@Directive()
export class uploadFiles {

  @Input() config;
  @Input() context;
  @Input() model: any = {};

  @Output() output = new EventEmitter();

  constructor(public video: File, public path: string, public uploadURI: string) {
    this.video = video;
    this.path = path;
    this.uploadURI = uploadURI;
  }

}
@Component({
  selector: 'app-video-upload-block',
  templateUrl: './video-upload-block.component.html',
  styleUrls: ['./video-upload-block.component.scss']
})

export class VideoUploadBlockComponent extends BaseBlockComponent implements OnInit {
  title = 'vimeo-uploader';
  videoList: FileList;
  videoLinks = [];
  pendingFiles: uploadFiles[] = [];
  percentage: string;
  allComplete: boolean;
  statusMsg: string;

  constructor(private upload: VimeoUploadService) {
    super();
  }


  ngOnInit() {
    this.upload.getValue().subscribe((value) => {
      this.percentage = value;
    });

    this.upload.getSuccess().subscribe((value) => {
      this.allComplete = value;
      console.log(value);
      this.output.emit(clone(value));
    });
  }


  openInput() {
    document.getElementById('video').click();
  }

  fileChange(files: File[]) {
    this.allComplete = false;
    if (files.length > 0) {
      console.log('You are about to upload ' + files.length + ' Videos to Vimeo');
      this.statusMsg = 'You are about to upload ' + files.length + ' Videos to Vimeo';
    }
  }


  public start(files: FileList) {
    this.videoList = files;
    console.log(this.videoList);
    const recursion = this.getLink(this.videoList[0], 0, this.videoList).pipe(expand(res => {
      return res.index > res.arr.length - 1 ?
        EMPTY : this.getLink(this.videoList[res.index], res.index, this.videoList);
    }));
    recursion.subscribe(x => {
      if (x.index > x.arr.length - 1) {
        console.log('Link generated, Starting upload');
        this.videoUpload();
      }
    });
  }
  getLink = (video: File, index, arr) => {
    console.log('index: ' + index);
    return this.upload.createVideo(video).pipe(
      map(response => {
        const videoFile = new uploadFiles(video, response.body.link, response.body.upload.upload_link);
        this.pendingFiles.push(videoFile);
        console.log('response: ' + response);
        return {
          data: response,
          index: index + 1,
          arr: arr
        };
      })
    );
  }

  videoUpload() {
    const success = () => {
      console.log('after video upload section');
    };
    const upload: Array<any> = [];
    for (let i = 0; i < this.pendingFiles.length; i++) {
      upload.push(
        this.upload.tusUpload(
          this.pendingFiles[i], i, this.pendingFiles, upload, success
        )
      );
    }
    console.log('start video upload sequentially');
    upload[0].start();
  }
}
