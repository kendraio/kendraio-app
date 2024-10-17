import { Component } from '@angular/core';
import { clone, get, isArray, isObject } from 'lodash-es';
import mermaid from 'mermaid';
import { BaseBlockComponent } from '../base-block/base-block.component';
import { mappingUtility } from '../mapping-block/mapping-util';
import { SharedStateService } from 'src/app/services/shared-state.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-mermaid-block',
  templateUrl: './mermaid-block.component.html',
  styleUrls: ['./mermaid-block.component.scss'],
})
export class MermaidBlockComponent extends BaseBlockComponent {
  // Mermaid object config.
  mermaidConfig = {
    startOnLoad: false,
    flowchart: {
      htmlLabels: true,
      curve: 'basis',
    },
  };
  // properties
  diagramType: string; // type of mermaid diagram
  diagramDirection: string; // direction of diagram
  graphGetter: string; // where to look for the graph definition in the model
  svgId: string; // ID of svg element

  svg: SafeHtml; // allow the svg data through sanitizer

  constructor(
    private stateService: SharedStateService,
    private sanitizer: DomSanitizer
  ) {
    super();
    // Only render if we are looking for data within state
    this.stateService.state$.subscribe((state) => {
      Promise.resolve(null).then(() => {
        if (this.graphGetter.startsWith('state')) {
          this.renderMermaid();
        }
      });
    });
  }

  ngAfterViewInit() {
    mermaid.initialize(this.mermaidConfig);
  }

  onConfigUpdate(config: any) {
    this.graphGetter = get(config, 'graphGetter', 'data');
    this.diagramType = get(config, 'diagramType', 'graph');
    this.diagramDirection = get(config, 'diagramDirection', 'TB');
    this.svgId = get(config, 'svgId', 'mermaid-svg');
    if (this.model) {
      // only attempt to render if data exists
      this.renderMermaid();
    }
  }

  onData(data: any, firstChange: boolean) {
    if (!firstChange) {
      this.renderMermaid();
    }
    this.output.emit(clone(data));
  }

  /**
   * Generates the mermaid graph definition
   * @returns {string} the graph definition
   */
  getGraphDefinition() {
    let graphDefinition = null;
    let graphHeader = this.diagramType + ' ' + this.diagramDirection + ' \n';
    let graph = mappingUtility(
      {
        data: this.model,
        context: this.context,
        state: this.stateService.state,
      },
      this.graphGetter
    );
    // compile our graph from the data
    if (isArray(graph)) {
      // if we have an array, just join it
      graphDefinition = graphHeader + graph.join('\n');
    } else if (isObject(graph)) {
      // if we have an object, join the values
      graphDefinition = graphHeader + Object.values(graph).join('\n');
    } else if (graph) {
      graphDefinition = graphHeader + graph + ';\n';
    }
    return graphDefinition;
  }

  /**
   * renders the mermaid graph
   */
  renderMermaid() {
    const graphDefinition = this.getGraphDefinition();
    if (graphDefinition) {
      mermaid.render(this.svgId, graphDefinition, (svgCode) => {
        this.svg = this.sanitizer.bypassSecurityTrustHtml(svgCode);
      });
    }
  }
}
