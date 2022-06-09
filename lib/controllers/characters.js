const { Router } = require('express');
const Character = require('../models/Character');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const characterData = await Character.getById(id);
    res.json(characterData);
  })
  .get('/', async (req, res) => {
    const characterData = await Character.getAll();
    const finalData = characterData.map((character) => character);
    res.json(finalData);
  });
