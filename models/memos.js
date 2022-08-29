'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class memos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.users, {foreignKey: 'user_id', sourceKey: 'id'});
    }
  }
  memos.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    feed_type: DataTypes.INTEGER,
    title: DataTypes.STRING,
    days: DataTypes.STRING,
    feeds_list: DataTypes.STRING,
    feeds_cnt: DataTypes.INTEGER,
    tot_cal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'memos',
  });
  return memos;
};