module.exports = (sequelize, DataTypes) => {
    return sequelize.define('producto', {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      descripcion: {
        type: DataTypes.STRING
      },
      precio: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    });
  };
  