const { list, store, show, update, destroy } = require('../services/UserService');

module.exports = {
  async list(req, res) {

    const user =  await list();

    return res.json(user);
  },
  async store(req, res) {
    const { name, email, tech } = req.body;

    const user = await store(
      name,
      email,
      tech
    );

    return res.json(user)
  },
  async show(req, res) {
    const { id } = req.params;

    const user = await show(id);

    return res.json(user);
  },
  async update(req, res) {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await update(
      id,
      name,
      email
    )

    return res.json(user);
  },
  async delete(req, res) {
    const { id } = req.params;

    await destroy(id);

    return res.send();
  }
}