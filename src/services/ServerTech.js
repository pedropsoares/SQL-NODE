const Tech = require('../models/Tech');
const User = require('../models/User');

module.exports = {
  async store(user_id, name) {

    const [tech] = await Tech.findOrCreate({
      where: { name }
    })

    const user = await User.findByPk(user_id);

    await user.addTech(tech);
  }
}
