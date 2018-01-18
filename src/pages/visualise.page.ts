import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import * as _ from 'lodash';
import { Store } from '@ngrx/store';
import { AppState, getRinProjects } from '@store/reducers';

@Component({
  selector: 'page-visualise',
  templateUrl: './visualise.page.html'
})
export class VisualisePage implements OnInit {

  force;
  nodes;
  links;

  constructor(private store: Store<AppState>) {
    this.force = d3.forceSimulation()
      .force('midpoint', d3.forceCenter(250, 125))
      .force('linkForce', d3.forceLink());
  }

  ngOnInit() {
    this.store.select(getRinProjects)
      .subscribe(projects => {
        this.nodes = [];
        // TODO: add links
        this.links = [];
        if (projects.length > 0) {
          const mapping = {
            musicalWorks: 'Title[0].TitleText',
            parties: 'PartyName.FullName',
            projects: 'ProjectName',
            sessions: 'Comment',
            soundRecordings: 'Version'
          };
          _.map(mapping, (path: string, type) => {
            _.map(projects[0][type], (value, id) => {
              this.nodes.push({
                title: _.get(value, path, type),
                type,
                id
              })
            })
          });
        }
        this.force.nodes(this.nodes);
      });
  }

}