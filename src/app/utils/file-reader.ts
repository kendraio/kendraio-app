import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import * as X2JS from 'x2js';
import { map } from 'rxjs/operators';

export function fileReader(file: File): Observable<string> {
  return Observable.create((observer: Observer<string>) => {
    const reader = new FileReader();
    reader.onload = e => observer.next((e.target as FileReader).result);
    reader.onerror = e => observer.error(e);
    reader.readAsText(file);
  });
}

export function readXml(config = {}) {
  const defaultConfig = {
    enableToStringFunc: false
  };
  const x2js = new X2JS({ ...defaultConfig, ...config });

  return file => fileReader(file).pipe(
    map((xmlString: string) => x2js.xml2js(xmlString))
  );
}
