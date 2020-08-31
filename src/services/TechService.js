const Tech = require('../models/Tech');
const User = require('../models/User');

module.exports = {
  async store(user_id, names) {
    const techs = names.map((name) => ({ name }));

    await Tech.bulkCreate(techs);

    names.map(async (name) => {
      const tech_user = await Tech.findOne({
        where: { name },
      });
      const user = await User.findByPk(user_id);

      await user.addTech(tech_user);
    });

    return techs;

    // names.map(async (name) => {
    //   const [tech] = await Tech.findOrCreate({
    //     where: { name },
    //   });
    //   const user = await User.findByPk(user_id);

    //   await user.addTech(tech);

    //   return tech;
    // });
  },
};
