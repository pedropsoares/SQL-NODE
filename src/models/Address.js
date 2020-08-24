const { Model, DataTypes } = require('sequelize');

class Address extends Model {
  static init(sequelize) {
    super.init({
      zipcode: {
        type: DataTypes.STRING
      },
      street: {
        type: DataTypes.STRING
      },
      number: {
        type: DataTypes.INTEGER
      }
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' , as: 'owner'});
  }
}

module.exports = Address;
