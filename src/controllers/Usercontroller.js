const User = require("../models/User");

const createTech = require('../services/CreateTech');
const IndexUser = require('../services/IndexUser');

module.exports = {
  async list(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },
  async store(req, res) {
    const { name, email, tech } = req.body;

    const user = await User.create({
      name,
      email
    })

    await createTech(user.id, tech)

    return res.json( await IndexUser(user.id))
  },
  async show(req, res) {
    const { id } = req.params;
    // const user = await User.findByPk(id);

    return res.json( await IndexUser(id) );
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