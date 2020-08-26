const User = require('../models/User');

const TechService = require('./ServerTech')

module.exports = {
  async list() {

    const user = await User.findAll({
      attributes: ['id', 'name', 'email'],
      include: { association: 'techs', attributes: ['name'], through: { attributes: [] } }
    });

    return user;
  },
  async store(name, email, tech) {

    const user = await User.create({
      name,
      email
    })

    await TechService.store(user.id, tech)

    return user;
  },
  async show(user_id) {

    const user = await User.findByPk(user_id, {
      attributes: ['name', 'email'],
      include: { association: 'techs', attributes: ['name'], through: { attributes: [] } }
    });

    return user;
  },
  async update(user_id, name, email) {
    const user = await User.findByPk(user_id);

    user.update({
      name,
      email
    })

    return user;
  },
  async destroy(user_id) {
    const user = await User.findByPk(user_id);

    user.destroy();
  }
}
