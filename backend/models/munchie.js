module.exports = function(sequelize, DataTypes) {
  var Munchie = sequelize.define("Munchie", {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    number: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: true },
    price: { type: DataTypes.DECIMAL, allowNull: false }
  // }, {
  //   classMethods: {
  //     associate: function(models) {
  //       Munchie.belongsTo(models.User, {
  //         onDelete: "CASCADE",
  //         foreignKey: {
  //           allowNull: false
  //         }
  //       });
  //     }
  //   }
  });

  return Munchie;
};
