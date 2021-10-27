'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    firstName: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
      validate: {
        isEmail: true
      },
      unique: 'email'
    }, 
    password: DataTypes.STRING,
    isAdmin: {
      type: DataTypes.BOOLEAN,
      default: false
    },
},
  {
    sequelize,
    modelName: 'user',
  });
  return user;
};