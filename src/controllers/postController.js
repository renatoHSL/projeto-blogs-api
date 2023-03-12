const { postService } = require('../services');

const getPost = async (req, res) => {
    try {
        const posts = await postService.getPost();
        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getPost,
};