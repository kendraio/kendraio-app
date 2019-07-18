import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { MatRadioChange } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Animations } from '../../animations';



@Component({
  selector: 'app-field-input-visibility',
  template: `

<div class="popup-container" >

<label>{{to.label}}</label>
<br/>

<div class="mat-card" @enterAnimateUpDwn style="max-width: 340px"  [formGroup]="formx" >


<mat-selection-list #playlists  formControlName="myPlaylistCtrl" >
  <mat-list-option checkboxPosition="before"
              *ngFor="let playlist of myPlaylists"
              [value]="playlist"
              (click)="onListControlChanged(playlists)"
              >
    {{playlist.name  | titlecase}} ({{playlist.visibility}})
  </mat-list-option>
</mat-selection-list>
<small>



Selected: {{ playlists.selectedOptions.selected.length }}
</small>
</div>


<div>
<label (click)="showNewPlaylist = !showNewPlaylist"> <b>Add New Playlist</b></label>
</div>

    <div class="schedule-popup" *ngIf="showNewPlaylist" [ngClass]="showNewPlaylist ? 'in' : 'out'"   @enterAnimateUpDwn >

    <div [formGroup]="newPlaylistForm">
<input class="pr form-control form-input"  formControlName="playlistTitle" />

<label>Visibility</label>
<select formControlName="visibility" >
<option value="Public">Public</option>
<option value="Private">Private</option>
<option value="Unlisted">Unlisted</option>
</select>

<label (click)="showNewPlaylist = false">Close</label>


    <label (click)="showNewPlaylist = false" (click)="createPlayList()">Create</label>

    </div>

</div>
</div>
 `,
  animations: [Animations.kendraAnimations]
})
// tslint:disable-next-line: component-class-suffiximplements OnInit
export class FieldInputPlaylistComponent extends FieldType implements OnInit {
  showNewPlaylist  = false;
  mySelectedPlaylists = [];
  myPlaylists: {
    id: string;
    name: string;
    visibility: string;
  }[] = [
      { 'id': '1', 'name': 'Fav Playlist', 'visibility': 'private' },
      { 'id': '2', 'name': 'Must See This', 'visibility': 'private' },
      { 'id': '3', 'name': 'OOOH nice one', 'visibility': 'private' },
      { 'id': '4', 'name': 'Testing Testing', 'visibility': 'private' }
    ];

  videoPlaylist: {
    id: string;
  }[] = [
      { 'id': '1' },
      { 'id': '3' }
    ];



  val: string;
  showSchedulue: boolean;
  newPlaylistForm = new FormGroup({});
  formx = new FormGroup({});
  valueChanges$: Observable<any>;
  playListValueChanges$: Observable<any>;
  subscription: Subscription;
  selectedOptionsx: string[];
  selectedOptions: string[];

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {


    this.newPlaylistForm = this.fb.group({
      visibility: '',
      playlistTitle: ''
    });

    this.formx = this.fb.group({
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

  private updateList() {
    this.mySelectedPlaylists = this.myPlaylists
      .filter(option => {
        return this.videoPlaylist.find(select => {
          return option.id === select.id;
        });
      });
    setTimeout(() => {
      this.formx.get('myPlaylistCtrl').setValue(this.mySelectedPlaylists);
    }, 500);
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

  onListControlChanged(list, event) {
    // this.selectedOptionsx = list.options.map(item => item.value);
    this.formControl.patchValue(this.videoPlaylist);
  }

  createPlayList(event) {
    const newId = Date.now().toString();
    this.myPlaylists.unshift({ 'id': newId, 'name': this.playlistTitle, 'visibility': this.visibility });
    this.videoPlaylist.unshift({ 'id': newId });
    this.formControl.patchValue(this.videoPlaylist);
    this.updateList();


  }

}

