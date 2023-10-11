module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define(
      "students",
      {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        standard: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        school: {
            type: DataTypes.STRING,
        },
      },
      {
        tableName: "students",
        timestamps: false,
      }
    );
    return Student;
  };
  