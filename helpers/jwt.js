const jwt = require('jsonwebtoken');

const generateJWT = (uid, name) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, name };
    
    jwt.sign(payload, process.env.SECRET_JWT_SEED, {
      expiresIn: process.env.TIME_JWT_EXPIRE
    }, (err, token) => {
      if (err) {
        console.log(err);
        reject('No se pudo generar el JWT');
      } else {
        resolve(token);
      }
    });
  });
}

module.exports = {
  generateJWT
}