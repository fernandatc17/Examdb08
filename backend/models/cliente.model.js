module.exports = (sequelize, DataTypes) => {
    return sequelize.define('cliente', {
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  };
  