import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import * as LZS from "lz-string";
import { MatLegacyDialog as MatDialog } from "@angular/material/legacy-dialog";
import { ShowShareLinkDialogComponent } from "../dialogs/show-share-link-dialog/show-share-link-dialog.component";
import { LocalDatabaseService } from "../services/local-database.service";

@Injectable({
  providedIn: "root",
})
export class ShareLinkGeneratorService {
  constructor(
    private readonly dialog: MatDialog,
    private readonly localDatabase: LocalDatabaseService,
  ) {}

  async shareFlowLink(path, flowData) {
    //environment.urlPrefix = 'http://127.0.0.1:4200/';
    const compressed_flow = LZS.compressToEncodedURIComponent(
      JSON.stringify(flowData),
    );
    const flowShareLink = `${environment.urlPrefix}${path}?data=${compressed_flow}`;

    const json_metadata_string = await this.localDatabase.exportMetadataTable();
    const compressed_database =
      LZS.compressToEncodedURIComponent(json_metadata_string);
    const dbShareLink = `${environment.urlPrefix}${path}?metadata=${compressed_database}`;

    this.dialog.open(ShowShareLinkDialogComponent, {
      data: {
        flowShareLink: flowShareLink,
        dbShareLink: dbShareLink,
      },
    });
  }

  getData() {
    const url = new URL(window.location.href);
    const data = url.searchParams.get("data");
    if (!!data) {
      const decompressed = LZS.decompressFromEncodedURIComponent(data);
      return JSON.parse(decompressed);
    }

    const metadata = url.searchParams.get("metadata");
    if (!!metadata) {
      const decompressed = LZS.decompressFromEncodedURIComponent(metadata);
      const parsed = JSON.parse(decompressed);
      if (parsed.length === 0) {
        throw new Error("The metadata table is empty.");
      }
      console.dir(parsed);
      const response = confirm(
        "Do you want to replace your metadata table with the one from the share link? WARNING: You may lose data.",
      );
      if (response == true) {
        this.localDatabase.importMetadataTable(parsed);
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
}
