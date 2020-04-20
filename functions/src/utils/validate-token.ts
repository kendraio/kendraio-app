import {userHash} from './get-hash';

const crypto = require('crypto');

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

export const validateToken = async (req, res, next) => {
  if ((!req.headers.authorization || !req.headers.authorization.startsWith('Bearer '))) {
    res.status(403).send('Unauthorized');
    return;
  }

  let idToken = '';
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    idToken = req.headers.authorization.split('Bearer ')[1];
  }

  let decodedToken;
  try {
    decodedToken = await makeHash(idToken.split(':')[1], 'TEMP123QQ1');
    if (decodedToken === userHash) {
      next();
      return;
    } else {
      res.status(403).send('Unauthorized');
    }
  } catch (e) {
    await res.status(400).send(e.message);
    return;
  }
};
