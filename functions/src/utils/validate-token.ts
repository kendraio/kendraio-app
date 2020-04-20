import * as admin from 'firebase-admin';

export const validateToken = async (req, res, next) => {
  if ((!req.headers.authorization || !req.headers.authorization.startsWith('Bearer '))) {
    res.status(403).send('Unauthorized');
    return;
  }

  let idToken = '';
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    idToken = req.headers.authorization.split('Bearer ')[1];
  }

  const decodedIdToken = await admin.auth().verifyIdToken(idToken);
  if (decodedIdToken && decodedIdToken.uid) {
    next();
    return;
  } else {
    res.status(403).send('Unauthorized');
    return;
  }
};
