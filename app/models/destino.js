'use strict';
module.exports = (sequelize, DataTypes) => {
  const Destino = sequelize.define('Destino', {
    nome: DataTypes.STRING
  }, {});
  Destino.associate = function(models) {
    // associations can be defined here
  };
  return Destino;
};