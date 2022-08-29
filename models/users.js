'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.memos, {foreignKey: 'user_id', sourceKey: 'id'});
    }
  }
  users.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    kakao_id: DataTypes.BIGINT,
    nickname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};