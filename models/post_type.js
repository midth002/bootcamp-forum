const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post_Type extends Model {}

Post_Type.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },

        post_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post_type',
    }
);




module.exports = Post_Type;