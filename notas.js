const Sequelize  = require('sequelize');
const database = require('./db');

//Estas condições são responsável para criar a tabelas com esses determinados campos: 
const Notas = database.define('notas', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    n1:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    n2:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    n3:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    
    n4:{
        type: Sequelize.INTEGER,
        allowNull: false
    }

})

module.exports = Notas;