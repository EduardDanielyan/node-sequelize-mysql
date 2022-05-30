module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        name: {
            type: Sequelize.STRING
        },
        surname: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER
        },
    },
        {
            freezeTableName: true,
            timestamps:false
        })
    return User
} 
