import {ChangeDetectorRef, Component, NgZone} from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {WorkflowRepoService} from '../../services/workflow-repo.service';
import { get } from 'lodash';

@Component({
  selector: 'app-gosub-block',
  templateUrl: './gosub-block.component.html',
  styleUrls: ['./gosub-block.component.scss']
})
export class GosubBlockComponent extends BaseBlockComponent {

  blocks = [];
  subModels = [];

  adapterName;
  workflowId;
  isLoading = true;
  hasError = false;
  errorMessage = '';

  constructor(
    private readonly repo: WorkflowRepoService,
    private readonly zone: NgZone,
    private readonly cd: ChangeDetectorRef
  ) {
    super();
  }

  onConfigUpdate(config: any) {
    this.adapterName = get(config, 'adapterName');
    this.workflowId = get(config, 'workflowId');
  }

  onData(data: any, firstChange: boolean) {
    if (this.adapterName && this.workflowId) {
      this.isLoading = true;
      this.repo.getBlocks(this.adapterName, this.workflowId).toPromise().then(({ blocks }) => {
        this.zone.run(() => {
          this.isLoading = false;
          this.blocks = [ ...blocks];
          this.subModels = [this.model];
          this.cd.markForCheck();
        });
      }).catch(err => {
        this.hasError = true;
        this.errorMessage = 'Error loading workflow: ' + err.message;
        this.isLoading = false;
      });
    }
  }

  onWorkflowComplete(event) {
    this.output.emit(event);
  }
}