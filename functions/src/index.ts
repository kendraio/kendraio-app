import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();
const db = admin.firestore();
const auth = admin.auth();

import {addMetatagsHandler} from './handlers/add-metatags';
import appFactory from './handlers/workflow-cloud';


export const dynamicIndex = functions.https.onRequest(addMetatagsHandler);
export const api = functions.https.onRequest(appFactory({ db, auth }));
