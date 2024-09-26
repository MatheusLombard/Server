const Sequelize = require('sequelize') 
const sequelize = new Sequelize('emergenif0_37386836_emergencialSaudecialsaude', 'if0_37386836', 'Ma09souza', {
    host: 'sql305.infinityfree.com',
    dialect: 'mysql'
}) 

sequelize.authenticate().then(() => {
    console.log('Conectado com sucesso')
}).catch((error) => {
    console.log('Problemas ao se comunicar com o BD: ', error)
})

module.exports = sequelize;