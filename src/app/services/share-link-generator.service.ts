import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as LZS from 'lz-string';
import { MatDialog } from '@angular/material';
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

/*
http://localhost:4200/tools/form-generator?data=N4IgUgyg8gchDGALApgWwIYgFwmAHQDtCACYvEAFwEsKAbZcrMkASQAUZyAaQk5gE2QBneACcqAB2oB7ItmYBBfv2LoCKgG7JxAMwCexPdICuo4iwIVtBdDJu1ibbTumjU24jGOoARh4AU7DAAlNy8BKTkFHoSDPLk0j4AVsjwFGFEEcyiyACOxlQ5-IzEANrhpJEgknIVxAC6PJlVEqLSsaLUwiX4zZXkNT11lczUdHFM5EEZfCPkgiLiUlSyJeQzWXOUMRPMQhTiBADmGyNVqFQEADLIxxSIJQBMTbP9IBgAHjd3D-KPAAzDYgAXxem2YtGk8FsKzkTF6ryq0ViaxA+0OJxAYLOoxo9FRVyhMNWICBwLq5MywKxIAAqiwECgMNhcHUBhI4cQEeDyAUsPwqEJ0D56MV5Dp0LQhMhsW8+RJaOh4MhENJaIJRKjkEdiABGR4AZgALABWABsAHYABwATkBpL6oLZIEh0LsQz6VXliuVqvV2lRAFFLB57shiABhEyWUR6U5yqhYADuVH4R2Q6XiIHg0YOVG6Dr4lMI1OBQA
 */
