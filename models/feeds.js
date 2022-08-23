'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class feeds extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  feeds.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    humidity: DataTypes.STRING,
    item_name: DataTypes.STRING,
    calorie: DataTypes.INTEGER,
    gram: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'feeds',
  });
  return feeds;
};