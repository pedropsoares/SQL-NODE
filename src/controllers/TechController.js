const { createMany } = require('../services/TechService');

module.exports = {
  async store(req, res) {
    const { user_id } = req.params;
    const { techs } = req.body;

    const arrayTechs = techs.split(', ');

    try {
      const response = await createMany(user_id, arrayTechs);
      return res.json(response);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
