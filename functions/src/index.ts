import * as functions from 'firebase-functions';

import {addMetatagsHandler} from './handlers/add-metatags';


export const dynamicIndex = functions.https.onRequest(addMetatagsHandler);
