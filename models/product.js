module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('product', {
        name: {
            type: Sequelize.STRING
        },
        count: {
            type: Sequelize.INTEGER
        },
        price: {
            type: Sequelize.DECIMAL
        },
        description: {
            type: Sequelize.STRING
        },
        userId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },

    },
        {
            freezeTableName: true

        })
    return Product
} 
