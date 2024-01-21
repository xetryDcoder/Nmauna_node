module.exports = (sequelize, Sequelize) => {
    const Blog = sequelize.define('blog', {
        title: {
            type: Sequelize.STRING
        }
    })

    return Blog
}