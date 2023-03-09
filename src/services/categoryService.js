const { Category } = require('../models');

const createCategory = async (name) => {
    const newCategory = await Category.create({ name });
    // console.log(newCategory, { message: 'service' });
    return newCategory;
};

const getCategories = async () => {
    const categories = await Category.findAll();
    return categories;
};

module.exports = {
    createCategory,
    getCategories,
};