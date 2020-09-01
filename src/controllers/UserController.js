const UserService = require('../services/UserService');

module.exports = {
  async list(req, res) {
    const user = await list();

    return res.json(user);
  },
  async store(req, res) {
    const user = req.body;

    const createdUser = await UserService.create(
      user
    );

    return res.json(createdUser);
  },
  async show(req, res) {
    const { id } = req.params;

    const user = await UserService.show(id);

    return res.json(user);
  },
  async update(req, res) {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await UserService.update(
      id,
      name,
      email,
    );

    return res.json(user);
  },
  async delete(req, res) {
    const { id } = req.params;

    await UserService.destroy(id);

    return res.send();
  },
};
