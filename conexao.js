const Sequelize  = require('sequelize');
const sequelize = new Sequelize('railway', 'root', 'gjIqJpRfMhxasbhwAiCZjSRcCQjrYNtV', {
    host: 'mysql.railway.internal',
    dialect: 'mysql'
}) 

sequelize.authenticate().then(() => {
    console.log('Conectado com sucesso')
}).catch((error) => {
    console.log('Problemas ao se comunicar com o BD: ', error)
})

module.exports = sequelize;