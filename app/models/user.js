'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nome: DataTypes.STRING,
    CPF: DataTypes.INTEGER,
    RG: DataTypes.INTEGER,
    datanasc: DataTypes.STRING,
    endereco: DataTypes.STRING,
    telefone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    id_destino: DataTypes.INTEGER,
    login: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasOne(
      models.Destino, 
      {foreignKey: 'id'}
      )
  };
  return User;
};