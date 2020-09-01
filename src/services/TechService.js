const Tech = require('../models/Tech');
const User = require('../models/User');

module.exports = {
  async createMany(techs) {

    return await Tech.bulkCreate(techs);
  },

  async AddTech(user_id, arrayTechs) {
    if (arrayTechs && arrayTechs.length) {
      const techs = await Tech.bulkCreate(
        arrayTechs.map((name) => ({ name })),
        { updateOnDuplicate: ['name'] }
      );

      techs.forEach(async (tech) => {
        const createdUser = await User.findByPk(user_id)
        await createdUser.addTechs(tech)
      });
      return techs;
    }
  },
};
