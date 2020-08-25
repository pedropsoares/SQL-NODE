const Tech = require('../models/Tech');
const User = require('../models/User');

module.exports = async (user_id, name_tech) => {

  const [tech] = await Tech.findOrCreate({
    where: { name: name_tech }
  })

  const user = await User.findByPk(user_id);

  await user.addTech(tech);
};
