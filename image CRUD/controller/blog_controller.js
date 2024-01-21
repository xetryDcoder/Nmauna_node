const { where } = require("sequelize")
const db = require("../model/index")

const Blog = db.Blog

exports.getCreateBlog = (req, res) => {
    return res.render('blog/create-blog')
}

exports.postCreateBlog = async (req, res) => {
    if (!req.body.title && !req.file.filename) {
        return res.status(400).send("Please Fill the form");
    }

    try {
        const data = await Blog.create({
            title: req.body.title,
            image: req.file.filename
        })
        return res.redirect('/create-blog')
    } catch (error) {
        console.log(error)
        return res.status(500).send("Internal Server Error");
    }
}

exports.showBlogs = async (req, res) => {
    const data = await Blog.findAll()
    return res.render('blog/view-blog', {
        data
    })
}

exports.getEditBlog = async (req, res) => {
    try {
        const data = await Blog.findByPk(req.params.id)
        if (data == null) {
            console.log("Error Occured while loadingf")
        } else {

            return res.render('blog/edit-blog', {
                data
            })
        }
    } catch (error) {
        return res.status(500).send("Internal Server Error")
    }
}

exports.postEditBlog = async (req, res) => {
    const blogId = req.params.id;
    console.log(blogId)
    try {
        let updatedBlog = await Blog.update({
            title: req.body.title
        }, {
            where: {
                id: req.params.id
            }
        })
        if (!updatedBlog) {
            return res.status(404).send("Blog not found");
        }

        console.log("Blog updated successfully:", updatedBlog);
        res.redirect(`/edit-blog/${blogId}`);
    } catch (error) {
        console.error(error);
        res.status(500).send("Oops! Something went wrong");
    }
};


exports.getDeleteBlog = async (req, res) => {
    try {
        let data = await Blog.destroy({where: {id: req.params.id}})
        return res.redirect('/view-blog')
    } catch (error) {
        console.log(error)
    }
}