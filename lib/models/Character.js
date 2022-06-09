const pool = require('../utils/pool');

module.exports = class Character {
  id;
  name;
  series;
  alias;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.series = row.series;
    this.alias = row.alias;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM characters');
    return rows.map((row) => new Character(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM characters WHERE id=$1', [
      id,
    ]);
    if (!rows[0]) return null;

    return new Character(rows[0]);
  }
};
