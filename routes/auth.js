// Rutas de usuarios / Auth
// host + /api/auth

const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validateFields');
const { createUser, loginUser, renewToken } = require('../controllers/auth');
const { validateJWT } = require('../middlewares/validateJWT');

const router = Router();

router.post(
  '/new', 
  [// Middlewares
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe tener al menos 6 caracteres').isLength({ min: 6 }),
    validateFields
  ],
  createUser
);

router.post(
  '/', 
  [// Middlewares
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe tener al menos 6 caracteres').isLength({ min: 6 }),
    validateFields
  ],
  loginUser
);

router.get('/renew', validateJWT, renewToken);

module.exports = router;