import { fromPromise } from 'rxjs/observable/fromPromise';

export const fetchText = file => fromPromise(fetch(file).then(data => data.text()));
