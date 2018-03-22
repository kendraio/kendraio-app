import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-adapter-component',
  template: `
    <!--{{ id | json }}-->
    <!--{{ adapter | json }}-->
    <ion-card>
      <ion-card-header>
        {{ adapter.config.title }} [{{ id }}]
      </ion-card-header>
      <ion-card-content>
        <p>{{ adapter.config.description }}</p>
      </ion-card-content>
      <ion-list>
        <ion-item>
          <h3>More information</h3>
          <p>{{ adapter.config.infoUrl }}</p>
        </ion-item>
        <ion-item>
          <h3>Maintainer</h3>
          <p>{{ adapter.config.maintainer }}</p>
        </ion-item>
        <ion-item>
          <h3>Support</h3>
          <p>{{ adapter.config.supportUrl }}</p>
        </ion-item>
        <ion-item>
          <button ion-button (click)="onDisable()" color="danger" *ngIf="adapter.enabled">Disable</button>
          <button ion-button (click)="onEnable()" *ngIf="!adapter.enabled">Enable</button>
          <button ion-button outline *ngIf="adapter.enabled">Backup</button>
          <button ion-button outline *ngIf="adapter.enabled">Restore</button>

        </ion-item>
      </ion-list>
    </ion-card>
  `
})
export class AdapterOptionComponent {
  @Input() id: string;
  @Input() adapter;
  @Output() enable: EventEmitter<string> = new EventEmitter<string>();
  @Output() disable: EventEmitter<string> = new EventEmitter<string>();

  onEnable() {
    this.enable.emit(this.id);
  }

  onDisable() {
    this.disable.emit(this.id);
  }
}
