module.exports = function (sequelize, DataTypes) {   //module.exports exporta; y se importa con "require"
    const Property = sequelize.define('Property',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        hostId: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          hostSince: {
            type: DataTypes.DATEONLY,
            allowNull: false
          },
          hostName: {
            type: DataTypes.STRING,
            allowNull: false
          },
          hostLocation: {
            type: DataTypes.STRING,
            allowNull: false
          },
          neighburhood: {
            type: DataTypes.STRING,
            allowNull: false
          },
          roomType: {
            type: DataTypes.STRING,
            allowNull: false
          },
          bedrooms: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          beds: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          numberOfReviews: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          availability30: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          availability60: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          availability90: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          availability365: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          price: {
            type: DataTypes.DECIMAL,
            allowNull: false
          },
        createdAt: {
          type: DataTypes.DATE
        },
        updatedAt: {
          type: DataTypes.DATE
        }
      }, {
        sequelize,
        tableName: 'properties',
        timestamps: true,
        paranoid: true,
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [
              { name: 'id' }
            ]
          }
        ]
      }
    )
  
    return Property
  }