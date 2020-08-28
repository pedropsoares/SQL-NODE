const { store } = require('../services/TechService');

module.exports = {
  async store(req, res) {
    const { user_id } = req.params;
    const { techs } = req.body;

    const names = techs.split(', ');

    await store(user_id, names);

    return res.json(names);
  },
};
