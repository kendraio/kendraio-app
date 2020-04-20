import {validateToken} from '../utils/validate-token';

function appFactory({ db }) {
  const app = require('express')();
  const cors = require('cors');
  const bodyParser = require('body-parser');

  const fakeId = () => db.collection().doc().id;

  app.use(cors());
  app.use(bodyParser.json());

  app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    if (username === 'kendraio' && password === 'kendraio') {
      res.send({ token: 'TEMP123QQ1' });
    } else {
      res.status(403).send('Unauthorized');
    }
  });

  const updateWorkflow = async ({ adapterName, workflowId, title, created, updated, ...body }) => {
    const now = new Date().toISOString();
    return await db
      .collection('adapters')
      .doc(adapterName || 'UNKNOWN')
      .collection('workflows')
      .doc(workflowId || fakeId())
      .set({
        adapterName,
        workflowId,
        title,
        created: created || now,
        updated: updated || now,
        _encoded: JSON.stringify(body)
      });
  };

  app.put('/api', validateToken, async (req, res) => {
    const docRef = await updateWorkflow(req.body);
    await res.send({ status: 'ok', id: docRef.id });
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
    await res.json({ status: 'ok', id: docRef.id  });
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

    const data = docRef.data();
    if (data) {
      const unEncode = JSON.parse(data._encoded);
      await res.send({
        ...unEncode,
        workflowId: docRef.id,
        adapterName: data.adapterName,
        created: data.created,
        updated: data.updated,
        modified: data.updated,
        title: data.title
      });
      return;
    }
    await res.status(500).send();
  });

  app.get('/api/', async (req, res) => {
    const docs = await db.collectionGroup("workflows").get();
    const result : Array<any> = [];
    docs.forEach(doc => {
      result.push({
        id: doc.id,
        workflowId: doc.id,
        title: doc.data().title,
        adapterName: doc.data().adapterName || 'UNKNOWN',
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
