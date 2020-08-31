const { store } = require('../services/TechService');

module.exports = {
  async store(req, res) {
    const { user_id } = req.params;
    const { techs } = req.body;

    const names = techs.split(', ');

    try {
      const response = await store(user_id, names);
      return res.json(response);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
