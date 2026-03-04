import {validateToken} from '../utils/validate-token';
import * as admin from 'firebase-admin';
import { userHash } from '../utils/get-hash';

const crypto = require('crypto');

const DEFAULT_ADAPTER_NAME = 'Adapter name';

const makeHash = (secret,  salt) => {
  return new Promise((resolve, reject) => {
    crypto.scrypt(secret, salt, 64, (err, derivedKey) => {
      if (err) {
        reject(err);
      }
      resolve(derivedKey.toString('hex'));
    });
  });
};

function appFactory({db, auth}: { db: admin.firestore.Firestore, auth: admin.auth.Auth }) {
  const app = require('express')();
  const cors = require('cors');
  const bodyParser = require('body-parser');

  const fakeId = () => db.collection('workflows').doc().id;

  app.use(cors());
  app.use(bodyParser.json());

  app.post('/api/login', async (req, res) => {
    const {username, password} = req.body;
    let user, hashedPassword;
    try {
      user = await auth.getUserByEmail(username);
      hashedPassword = await makeHash(password, 'TEMP123QQ1');
    }
    catch (e: unknown) {
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred';
      res.status(403).send(errorMessage);
      return;
    }
    if (hashedPassword === userHash && user && user.uid) {
      const token = `${user.uid}:${password}`;
      await res.send({ token });
      return;
    } else {
      console.log(user);
      await res.status(403).send('Unauthorized');
      return;
    }
  });

  const updateWorkflow = async ({adapterName, workflowId, title, tags, created, updated, ...body}) => {
    const now = new Date().toISOString();
    const id = workflowId || fakeId();
    await db
      .collection('adapters')
      .doc(adapterName || DEFAULT_ADAPTER_NAME)
      .collection('workflows')
      .doc(id)
      .set({
        adapterName,
        workflowId: id,
        title,
        tags,
        created: created || now,
        updated: updated || now,
        _encoded: JSON.stringify(body)
      });
    return { id };
  };

  app.put('/api', validateToken, async (req, res) => {
    const docRef = await updateWorkflow(req.body);
    await res.send({status: 'ok', id: docRef.id});
  });

  app.get('/api/tag/:tag', async (req, res) => {
    const tag = `${req.params.tag}`;
    const docs = await db
      .collectionGroup('workflows')
      .where('tags', 'array-contains', tag)
      .get();
    const result: Array<any> = [];
    docs.forEach(doc => {
      result.push({
        id: doc.id,
        workflowId: doc.id,
        tags: doc.data().tags,
        title: doc.data().title,
        adapterName: doc.data().adapterName || DEFAULT_ADAPTER_NAME,
        created: doc.data().created,
        updated: doc.data().updated,
        modified: doc.data().updated
      });
    });
    res.send(result);
  });

  app.post('/api/:adapterName/:workflowId', validateToken, async (req, res) => {
    const now = new Date().toISOString();
    const adapterName = `${req.params.adapterName}`;
    const workflowId = `${req.params.workflowId}`;
    const docRef = await updateWorkflow({
      ...req.body,
      adapterName,
      workflowId,
      updated: now
    });
    await res.json({status: 'ok', id: docRef.id});
  });

  app.get('/api/:adapterName/:workflowId', async (req, res) => {
    const adapterName = `${req.params.adapterName}`;
    const workflowId = `${req.params.workflowId}`;

    const docRef = await db
      .collection('adapters')
      .doc(adapterName)
      .collection('workflows')
      .doc(workflowId)
      .get();

    if (docRef.exists) {
      const data = docRef.data() || {};
      const unEncode = JSON.parse(data._encoded || '{}');
      await res.send({
        ...unEncode,
        workflowId: docRef.id,
        adapterName: data.adapterName || DEFAULT_ADAPTER_NAME,
        created: data.created || new Date().toISOString(),
        tags: data.tags || [],
        updated: data.updated || new Date().toISOString(),
        modified: data.updated || new Date().toISOString(),
        title: data.title || 'Untitled'
      });
      return;
    }

    await res.status(500).send();
  });

  app.get('/api/', async (req, res) => {
    const docs = await db.collectionGroup('workflows').get();
    const result: Array<any> = [];
    docs.forEach(doc => {
      result.push({
        id: doc.id,
        workflowId: doc.id,
        title: doc.data().title,
        tags: doc.data().tags,
        adapterName: doc.data().adapterName || DEFAULT_ADAPTER_NAME,
        created: doc.data().created,
        updated: doc.data().updated,
        modified: doc.data().updated
      });
    });
    res.send(result);
  });

  app.get('/flows/', async (req, res) => {
    const docs = await db.collectionGroup('workflows').get();
    const result: Array<any> = [];
    docs.forEach(doc => {
      let data = doc.data();
      let unEncode = JSON.parse(data._encoded);
      result.push({
        ...unEncode,
        id: doc.id,
        workflowId: doc.id,
        title: doc.data().title,
        tags: doc.data().tags,
        adapterName: doc.data().adapterName || DEFAULT_ADAPTER_NAME,
        created: doc.data().created,
        updated: doc.data().updated,
        modified: doc.data().updated
      });
    });
    res.send(result);
  });

  return app;
}

export default appFactory;
