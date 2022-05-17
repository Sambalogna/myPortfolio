const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {} 
//
Project.init( 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        projectName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        projectImage: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        projectURL: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'project',
    }
);

module.exports = Project