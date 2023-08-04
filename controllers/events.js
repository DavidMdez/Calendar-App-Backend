const { response } = require('express');
const Event = require('../models/Event');

const getEvents = async (req, res = response) => {
  res.json({
    ok: true,
    msg: 'getEvents'
  });
}

const createEvents = async (req, res = response) => {
  const event = new Event(req.body);

  try {
    event.user = req.uid;

    const newEvent = await event.save();

    res.status(201).json({
      ok: true,
      event: newEvent
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error inesperado..., Contacte al administrador'
    });
  }
}

const updateEvents = async (req, res = response) => {
  res.json({
    ok: true,
    msg: 'updateEvents'
  });
}

const deleteEvents = async (req, res = response) => {
  res.json({
    ok: true,
    msg: 'deleteEvents'
  });
}

module.exports = {
  getEvents,
  createEvents,
  updateEvents,
  deleteEvents
}
