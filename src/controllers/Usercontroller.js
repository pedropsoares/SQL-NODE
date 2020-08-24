const User = require("../models/User");

module.exports = {
  async list(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },
  async store(req, res) {
    const { name, email } = req.body;

    const user = await User.create({
      name,
      email
    })

    return res.json(user)
  },
  async show(req, res) {
    const { id } = req.params;
    const user = await User.findByPk(id);

    return res.json(user);
  },
  async update(req, res) {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await User.findByPk(id);

    user.update({
      name,
      email
    })

    return res.json(user);
  },
  async delete(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);

    user.destroy();

    return res.send();
  }
}