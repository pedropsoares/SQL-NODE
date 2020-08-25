const { Model, DataTypes } = require('sequelize');

class Tech extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING
      },
    }, {
      sequelize,
      tableName: 'techs'
    })
  }

  static associate(models) {
    this.belongsToMany(models.User, { foreignKey: 'tech_id', through: 'user_techs', as: 'users' });
  }
}

module.exports = Tech;
