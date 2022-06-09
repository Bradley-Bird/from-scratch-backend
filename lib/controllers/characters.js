const { Router } = require('express');
const Character = Router('../models/Character.js');

module.exports = Router().get('/', async (req, res) => {
  const characterData = await Character.getAll();
  const finalData = characterData.map((character) => character);
  res.json(finalData);
});
