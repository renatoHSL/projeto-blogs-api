const { Category } = require('../models');

const createCategory = async (categoryName) => {
    const newCategory = await Category.create({ categoryName });
    // console.log(newCategory, { message: 'service' });
    return newCategory;
};

module.exports = {
    createCategory,
};