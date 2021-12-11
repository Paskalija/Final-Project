const Post = require('../models/post');
const User = require('../models/user');
const { post } = require('../routes');

module.exports = {
  myRecipes: async (req, res) => {
    try {
      posts = await Post.find({ user: req.user.id })
      res.send({
        err: false,
        message: `List of recipes from ${req.user.first_name}`,
        posts: posts
      })
    }
    catch (err) {
      res.send({
        err: true,
        message: err.message
      })
    }
  },
  view: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id)
     await Post.findOneAndUpdate(req.params.id);
      post.review += 1;
      post.save()
  
       res.send({
        error: false,
        message: "This post was visited",
        post: post
      });
    
   } catch (error) {
      res.send({
        error: true,
        message: error.message
      });
    }
  },
  create: async (req, res) => {
    try {
      req.body.user = req.user.id;
      const post = await Post.create(req.body);

      res.status(201).send({
        error: false,
        message: `User with id #${req.body.user} has just created a new post!`,
        post: post
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.message
      });
    }
  },
  delete: async (req, res) => {
    try {
      await Post.findByIdAndDelete(req.params.id)
      res.send({
        error: false,
        message: "Deleted"
      });
    }
    catch (error) {
      res.send({
        error: true,
        message: error.message
      })
    }

  },
  homePage: async (req, res) => {
    try {
     const limitNumber = 3;
     const freshNew = await Post.find({}).sort({createdAt: -1}).limit(limitNumber);
     const mostPopular = await Post.find({}).sort({review: -1}).limit(limitNumber);
     res.send({
       error: false,
       message: 'Home page',
       freshNew: freshNew,
       mostPopular: mostPopular
     });
   } catch (error) {
     res.send({
       error: true,
       message: error.message
     })
   }  
   },
  breakfast: async (req, res) => {
    try {
      posts = await Post.find({ category: 'Breakfast' });

      res.send({
        error: false,
        message: 'Breakfast',
        posts: posts
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.message
      });
    }
  },
  brunch: async (req, res) => {
    try {
      const posts = await Post.find({ category: 'Brunch' });

      res.send({
        error: false,
        message: 'Brunch',
        posts: posts
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.message
      });
    }
  },
  lunch: async (req, res) => {
    try {
      const posts = await Post.find({ category: 'Lunch' });

      res.send({
        error: false,
        message: 'Lunch',
        posts: posts
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.message
      });
    }
  },
  dinner: async (req, res) => {
    try {
      const posts = await Post.find({ category: 'Dinner' });

      res.send({
        error: false,
        message: 'Dinner',
        posts: posts
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.message
      });
    }
  },
  update: async (req, res) => {
    try {
      await Post.findByIdAndUpdate(req.user.id, req.body);

      res.send({
        error: false,
        message: `Post ${req.body.title} has been updated`
      })
    } catch (error) {
      res.send({
        error: true,
        message: error.message
      })
    }
  }
}