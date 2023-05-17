const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

//videogame, tiene los atributos, para las columnas.
//restriciones 

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
    allowNull:false,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    released: {
      type: DataTypes.STRING
      
    },
    description: {
      type: DataTypes.STRING,
       allowNull: false
    },
    rating:{
      type: DataTypes.FLOAT
      //type: DataTypes.INTEGER
    },
    platforms:{
      type: DataTypes.ARRAY(DataTypes.STRING)
    
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
  } , { timestamps: false });
};
