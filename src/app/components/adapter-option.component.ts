import { Component, Input } from '@angular/core';

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
          <ion-toggle [checked]="adapter.enabled"></ion-toggle>
        </ion-item>
      </ion-list>
    </ion-card>
  `
})
export class AdapterOptionComponent {
  @Input() id: string;
  @Input() adapter;

  onChange(e) {
    console.log(e);
  }
}
