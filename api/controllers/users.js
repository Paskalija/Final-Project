const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports = {
  myProfile: async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      if (user.image == null) {
        user.image = ""
      }
      res.send({
        err: false,
        message: `My profile`,
        user: user
      })
    }
    catch (error) {
      res.send({
        error: true,
        message: error.message
      })
    }
  },

  register: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        throw new Error('This email is already taken!');
      }

      if (req.body.repeat_password === req.body.password) {
        req.body.password = bcrypt.hashSync(req.body.password);
        user = await User.create(req.body);
      }
      else {
        throw new Error("Passwords don't match");
      }
      res.send({
        error: false,
        message: 'User created!',
        user: user
      });
    }
    catch (error) {
      res.send({
        error: true,
        message: error.message
      });
    }
  },


  login: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        throw new Error('No user was found!');
      }

      if (!bcrypt.compareSync(req.body.password, user.password)) {
        throw new Error('Not a match!');
      }
      
      const payload = {
        id: user._id,
        email: user.email,

      }
      const token = jwt.sign(payload, process.env.AUTH_SECRET, {
        expiresIn: '7h'
      });
      res.send({
        err: false,
        message: "User logged in ",
        token: token
      });
    }
    catch (error) {
      res.send({
        error: true,
        message: error.message
      });
    }
  },
  update: async (req, res) => {
    try {
      const user = await User.findById(req.user.id)
      if (req.file) {
        req.body.image = `http://localhost:7000/images/${req.file.filename}`;
      }else {
        req.body.image = user.image;
      }

      if (req.body.password) {
        req.body.password = bcrypt.hashSync(req.body.password);
      }else {
        req.body.password = user.password;
      }

      user = await User.findByIdAndUpdate(req.user.id, req.body)
      res.send({
        err: false,
        message: 'You just updated your profile!'
      })
      
    } catch (error) {
      res.send({
        error: true,
        message: error.message
      })
    }
  },
 
  logout: (req, res) => {
    try {
      const payload = {
        id: req.user.id,
        email: req.user.email,
        first_name: req.user.first_name
      }
      const token = jwt.sign(payload, process.env.AUTH_SECRET, {
        expiresIn: '3s'
      });

      res.send({
        error: false,
        token: token
      });
    } catch (err) {
      res.send({
        err: true,
        message: err.message
      })
    }
  },
  delete: async (req, res) => {
    try {
      const payload = {
        id: req.user.id,
        email: req.user.email,
        first_name: req.user.first_name
      }
      const token = jwt.sign(payload, process.env.AUTH_SECRET, {
        expiresIn: '3s'
      })
      await User.findByIdAndDelete(req.user.id)
      res.send(token);
    }
    catch (err) {
      res.send({
        err: true,
        message: err.message
      })
    }
  }
}