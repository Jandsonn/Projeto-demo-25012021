// Conexão com o postgress, no host do container docker
const Sequelize = require('sequelize');
const sequelize  = new Sequelize('crud', 'postgres', '12345', {
    dialect: 'postgres',
    host:'172.19.0.2'
});


module.exports = sequelize;
