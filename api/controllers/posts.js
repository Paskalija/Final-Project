const Post = require('../models/post');


module.exports = {
  myRecipes: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id })
      res.send({
        err: false,
        message: "List of your recipes!",
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
      const post = await Post.findById(req.params.id);
      post.view += 1;
      await Post.findOneAndUpdate(req.params.id);
      post.save()

      res.send({
        error: false,
        message: "One more click on this post!",
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
      req.body.image = `http://localhost:7000/images/${req.file.filename}`;
      const post = await Post.create(req.body);

      res.send({
        error: false,
        message: 'You just created a new recipe!',
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
      await Post.deleteOne({ _id: req.params.id })
      res.send({
        error: false,
        message: "Recipe deleted!"
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
      const showFreshAndNew = 3;
      const showMostPopular = 6;
      const freshNew = await Post.find({}).sort({ createdAt: -1 }).limit(showFreshAndNew);
      const mostPopular = await Post.find({}).sort({ view: -1 }).limit(showMostPopular);
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
      const posts = await Post.find({ category: 'Breakfast' });

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
      const post = await Post.findById(req.body.id);

      if (req.file) {
        req.body.image = `http://localhost:7000/images/${req.file.filename}`;
      } else {
        req.body.image = post.image;
      }

       await Post.findByIdAndUpdate(req.body.id, req.body);

      res.send({
        error: false,
        message: 'You just updated your recipe!'
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.message
      })
    }
  },

  recipe: async (req, res) => {
    try {
      const post = await Post.findById({ _id: req.params.id })
      res.send({
        err: false,
        message: "Here is your recipe!",
        post: post
      })
    }
    catch (err) {
      res.send({
        err: true,
        message: err.message
      })
    }
  },

}