// Event Routes
// /api/events

const { Router } = require("express");
const { validateJWT } = require("../middlewares/validateJWT");
const { getEvents, createEvents, updateEvents, deleteEvents } = require("../controllers/events");

const router = Router();
router.use(validateJWT);

// Obtener eventos
router.get('/', getEvents);

// Crear un nuevo evento
router.post('/', createEvents);

// Actualizar evento
router.put('/:id', updateEvents);

// Borrar evento
router.delete('/:id', deleteEvents);

module.exports = router;
