const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
    allowNull:false,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
      // type: DataTypes.INTEGER,
      // primaryKey: true,
      // autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    image: {
      type: DataTypes.STRING
    },
    released: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    rating:{
      type: DataTypes.INTEGER
    },
    platforms:{
      type: DataTypes.STRING,
      // allowNull: false 
    },created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
  } , { timestamps: false });
};