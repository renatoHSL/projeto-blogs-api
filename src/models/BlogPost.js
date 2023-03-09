const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        published: DataTypes.STRING,
        updated: DataTypes.DATE,
        userId: { type: DataTypes.INTEGER, foreignKey: true },
    },

        {
            tableName: 'blog_posts',
            createdAt:  'published',
            updatedAt: 'updated',
            underscored: true,
        }
    );
    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' })
    }

    return BlogPost
}