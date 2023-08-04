const { response } = require('express');

const getEvents = async (req, res = response) => {
  res.json({
    ok: true,
    msg: 'getEvents'
  });
}

const createEvents = async (req, res = response) => {
  res.json({
    ok: true,
    msg: 'createEvents'
  });
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
