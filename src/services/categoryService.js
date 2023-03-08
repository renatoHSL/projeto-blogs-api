const { Category } = require('../models');

const createCategory = async (categoryName) => {
    const newCategory = await Category.create({ categoryName });
    return newCategory;
};

module.exports = {
    createCategory,
};