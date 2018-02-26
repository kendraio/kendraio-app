import { Component, OnInit } from '@angular/core';
import { NodesActions } from '../../app/state/nodes/actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/state';
import { NavController, NavParams } from 'ionic-angular';
import { DynamicFormControlModel } from '@ng-dynamic-forms/core';
import { FormGroup } from '@angular/forms';
import { KendraioFormsService } from '../../app/services/kendraio-forms.service';

@Component({
  selector: 'page-node',
  templateUrl: 'node.html'
})
export class NodePage implements OnInit {

  formModel: DynamicFormControlModel[];
  formGroup: FormGroup;

  selectedItem: any;
  adapterId: string;

  selectedLinkType;
  validLinkTypes = [];
  message = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private forms: KendraioFormsService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.adapterId = navParams.get('adapterId');
  }

  ngOnInit() {
    console.log('init node component');
    this.formModel = this.forms.getNodeForm(this.selectedItem, this.adapterId);
    this.formGroup = this.forms.createFormGroup(this.formModel);

    this.validLinkTypes = this.forms.getValidLinksForNodeType(this.adapterId, this.selectedItem.type);
  }

  gotoNode(id) {
    console.log('goto', id);
    const item = this.forms.getNodeFromId(id);
    this.navCtrl.push(NodePage, {
      item,
      adapterId: 'm-rin'
    });
  }

  onSelectLinkType(l) {
    this.selectedLinkType = l;
  }

  addLink() {
    if (this.selectedLinkType) {

    } else {
      this.message = 'select link type';
    }
  }

}
