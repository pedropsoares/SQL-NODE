const User = require('../models/User');

module.exports = async (user_id) => {

  console.log(user_id)

  const user = await User.findByPk(user_id, {
    include: { association: 'techs' }
  });

  return user;
}
