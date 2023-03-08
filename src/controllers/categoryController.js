const { categoryService } = require('../services');

const createCategory = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: '"name" is required' });
    }
    const categories = await categoryService.createCategory(name);
    res.status(201).json(categories);
};

module.exports = { 
    createCategory,
 };