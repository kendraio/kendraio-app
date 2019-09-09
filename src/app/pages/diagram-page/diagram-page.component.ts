import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as mermaidAPI from 'mermaid';
import {ActivatedRoute} from '@angular/router';
import {filter, map, switchMap, tap} from 'rxjs/operators';
import {AdaptersService} from '../../services/adapters.service';
import {get} from 'lodash-es';
import {HttpClient} from '@angular/common/http';

const BASE_PATH = 'https://kendraio.github.io/kendraio-adapter/';

@Component({
  selector: 'app-diagram-page',
  templateUrl: './diagram-page.component.html',
  styleUrls: ['./diagram-page.component.scss']
})
export class DiagramPageComponent implements OnInit, AfterViewInit {

  @ViewChild('diagram', { static: true }) diagram: ElementRef;

  title = '';
  graph;
  graphDef = '';
  definitionPath = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly adapters: AdaptersService,
    private readonly http: HttpClient
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.route.paramMap.pipe(
      map(params => ({
        adapter: params.get('adapter'),
        id: params.get('id')
      })),
      switchMap(({ adapter, id }) => this.adapters.getAdapter(adapter).pipe(
        map(allAdapters => get(allAdapters, `actions[${id}]`))
      )),
      filter(Boolean),
      switchMap(({ title, path }) => {
        this.definitionPath = path;
        return this.http.get(`${BASE_PATH}${path}`, { responseType: 'text' }).pipe(
          map(text => ({ title, graphDef: text }))
        );
      })
    ).subscribe(({ title, graphDef }) => {
      this.title = title;
      this.graphDef = graphDef;
      this.graph = mermaidAPI.render('graphDiv', graphDef, svgCode => {
        this.diagram.nativeElement.innerHTML = svgCode;
      });
    });
  }
}

