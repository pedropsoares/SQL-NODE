const User = require('../models/User');

const TechService = require('./TechService');

module.exports = {
  async list() {
    const user = await User.findAll({
      attributes: ['id', 'name', 'email'],
      include: { association: 'techs', attributes: ['name'], through: { attributes: [] } },
    });

    return user;
  },
  async create(user) {
    const createdUser = await User.create(user);
    const arrayTechs = user.techs.split(', ');

    if (arrayTechs && arrayTechs.length) {
      const techs = await TechService.createMany(
        arrayTechs.map((name) => ({ name })),
      );

      techs.forEach(async (tech) => {
        await createdUser.addTechs(tech)
      });

      await TechService.createMany(createdUser.id, arrayTechs)

      return createdUser;
    }
  },
  async show(user_id) {
    const user = await User.findByPk(user_id, {
      attributes: ['name', 'email'],
      include: { association: 'techs', attributes: ['name'], through: { attributes: [] } },
    });

    return user;
  },
  async update(user_id, name, email) {
    const user = await User.findByPk(user_id);

    user.update({
      name,
      email,
    });

    return user;
  },
  async destroy(user_id) {
    const user = await User.findByPk(user_id);

    user.destroy();
  },
};
