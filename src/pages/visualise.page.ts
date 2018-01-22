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
  colours;

  constructor(private store: Store<AppState>) {
    this.colours = d3.schemeCategory20;
    this.force = d3.forceSimulation()
      .force('charge', d3.forceManyBody().strength(0))
      // .force('linkForce', d3.forceLink())
      .force('midpoint', d3.forceCenter(100, 50))
    ;
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
    this.force.on('tick', console.log);
  }

  getNodeColour(type) {
    const keys = ['musicalWorks', 'parties', 'projects', 'sessions', 'soundRecordings'];
    const c = _.indexOf(keys, type);
    return this.colours[c];
  }
}