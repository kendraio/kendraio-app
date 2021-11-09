import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as LZS from 'lz-string';
import { MatDialog } from '@angular/material/dialog';
import { ShowShareLinkDialogComponent } from '../dialogs/show-share-link-dialog/show-share-link-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ShareLinkGeneratorService {

  constructor(
    private readonly dialog: MatDialog
  ) { }

  shareLink(path, data) {
    const compressed = LZS.compressToEncodedURIComponent(JSON.stringify(data));
    const shareLink = `${environment.urlPrefix}${path}?data=${compressed}`;
    const dialogRef = this.dialog.open(ShowShareLinkDialogComponent, {
      data: { shareLink }
    });
  }

  getData() {
    const url = new URL(window.location.href);
    const data = url.searchParams.get('data');
    if (!!data) {
      const decompressed = LZS.decompressFromEncodedURIComponent(data);
      return JSON.parse(decompressed);
    }
    return false;
  }

}
