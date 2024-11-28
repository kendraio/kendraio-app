import { Component, OnInit, Input } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { MatRadioChange } from '@angular/material/radio';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Animations } from '../../animations';
import { UserProfile } from '../../services/google/user-profile.service';
import { YoutubeDataService } from 'src/app/services/youtube-data.service';

@Component({
  selector: 'app-field-input-visibility',
  templateUrl: 'playlists.component.html',
  animations: [Animations.kendraAnimations]
})
// tslint:disable-next-line: component-class-suffiximplements OnInit
export class FieldInputPlaylistComponent extends FieldType implements OnInit {

  // @Input()
  // formControl;

  @Input() blocks = [];
  @Input() models = [];
  @Input() context = {};
  @Input() videoId = {};

  showNewPlaylist  = false;
  mySelectedPlaylists = [];
Playlists: any = [];


  videoPlaylist: {
    id: string;
  }[] = [
      { 'id': '1' },
      { 'id': '3' }
    ];

  val: string;
  showSchedulue: boolean;
  newPlaylistForm = new UntypedFormGroup({});
  myform = new UntypedFormGroup({});
  valueChanges$: Observable<any>;
  playListValueChanges$: Observable<any>;
  subscription: Subscription;
  selectedOptionsx: string[];
  selectedOptions: string[];

  constructor(
    private fb: UntypedFormBuilder,
    private  userProfile: UserProfile,
    private yt: YoutubeDataService
    ) {
    super();

 
  }

  ngOnInit(): void {





this.yt.getMyPlaylists().subscribe((response: any) => {
this.Playlists = response.items;
});


    this.newPlaylistForm = this.fb.group({
      visibility: '',
      playlistTitle: ''
    });

    this.myform = this.fb.group({
      myPlaylistCtrl: ''
    });

    this.updateList();
    this.valueChanges$ = this.newPlaylistForm.valueChanges;
    //  this.playListValueChanges$ = this.formx.get('myPlaylistCtrl').valueChanges;

    // this.subscription = this.playListValueChanges$
    // .pipe()
    // .subscribe(res => {

    //               //       this.onListControlChanged(res);
    //                   //  this.formControl.patchValue(this.formx.value);
    //                 //   this.formControl.patchValue(this.myPlaylistCtrl);
    //                   //  this.myPlaylist = this.myPlaylistCtrl;

    //                 //   this.myPlaylistCtrl.forEach(element => {
    //                 //     this.myPlaylist.unshift(element);
    //                 // });

    // });
    //  this.formx.get('myPlaylistCtrl').valueChanges.subscribe(value => {
    // console.log(value);

    //   });

  }


addVideoToPlayList (playlistId, videoId) {
  this.yt.addVideoToPlaylist(playlistId, videoId).subscribe(()=> {

  })
}



  private updateList() {
//     this.mySelectedPlaylists = this.myPlaylists
//       .filter(option => {
//         return this.videoPlaylist.find(select => {
//           return option.id === select.id;
//         });
//       });
//     setTimeout(() => {
//   this.myform.get('myPlaylistCtrl').setValue(this.mySelectedPlaylists);

// this.formControl.setValue(this.myform.value);

//     }, 500);
  }

  // get myPlaylistCtrl() {
  //   return this.formx.get('myPlaylistCtrl').value;
  // }

  get visibility() {
    return this.newPlaylistForm.get('visibility').value;
  }

  get playlistTitle() {
    return this.newPlaylistForm.get('playlistTitle').value;
  }

  onListControlChanged(listId, event) {
    // this.selectedOptionsx = list.options.map(item => item.value);
   this.formControl.patchValue(this.videoPlaylist);
    // this.formControl.setValue('this.videoPlaylist');
   // console.log(this.formControl);
    // console.log(this.videoPlaylist);
  console.log(this.myform.value);
  // this.addVideoToPlayList(listId, this.formControl.value) // TODO uncomment when ready
  }

  createPlayList(event) {
    const newId = Date.now().toString();
    // this.myPlaylists.unshift({ 'id': newId, 'name': this.playlistTitle, 'visibility': this.visibility });
    this.videoPlaylist.unshift({ 'id': newId });
    this.formControl.patchValue(this.videoPlaylist);
    this.updateList();


  }

}

