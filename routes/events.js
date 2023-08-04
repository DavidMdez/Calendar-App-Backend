// // Event Routes
// // /api/events

// const { Router } = require("express");
// const { check } = require("express-validator");

// const { isDate } = require("../helpers/isDate");
// const { validateFields } = require("../middlewares/validateFields");
// const { validateJWT } = require("../middlewares/validateJWT");
// const { getEvents, createEvents, updateEvents, deleteEvents } = require("../controllers/events");

// const router = Router();
// router.use(validateJWT);

// // Obtener eventos
// router.get('/', getEvents);

// // Crear un nuevo evento
// router.post(
//   '/',
//   [
//     check('title', 'El título es obligatorio').not().isEmpty(),
//     check('start', 'La fecha de inicio es obligatoria').custom(isDate),
//     check('end', 'La fecha de finalización es obligatoria').custom(isDate),
//     validateFields
//   ],
//   createEvents
// );

// // Actualizar evento
// router.put(
//   '/:id',
//   [
//     check('title', 'El título es obligatorio').not().isEmpty(),
//     check('start', 'La fecha de inicio es obligatoria').custom(isDate),
//     check('end', 'La fecha de finalización es obligatoria').custom(isDate),
//     validateFields
//   ], 
//   updateEvents
// );

// // Borrar evento
// router.delete('/:id', deleteEvents);

// module.exports = router;
