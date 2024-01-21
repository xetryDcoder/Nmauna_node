const express = require('express');
const router = express.Router();

// Controller calling
const blogController = require('./../controller/blog_controller');

// Helper call
const multerHelper = require('./../helper/multer-file-helper');

// Routes
router.get('/view-blog', blogController.showBlogs);
router.get('/create-blog', blogController.getCreateBlog);
router.post('/create-blog', multerHelper, blogController.postCreateBlog);
router.get('/edit-blog/:id', blogController.getEditBlog);
router.post('/edit-blog/:id', blogController.postEditBlog);
router.get('/delete-blog/:id', blogController.getDeleteBlog);

module.exports = router;
