const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports = {
  myProfile: async (req, res) => {
    try {
      user = await User.findById(req.user.id)
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
      let user = await User.findOne({ email: req.body.email })
      if (user) {
        throw new Error('This email is already taken!')
      }

      if (req.body.repeat_password === req.body.password) {
        req.body.password = bcrypt.hashSync(req.body.password)
        user = await User.create(req.body)
      }
      else {
        throw new Error("Passwords don't match")
      }
      res.send({
        error: false,
        message: 'New user record created!',
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
        throw new Error('Invalid credentials');
      }

      if (!bcrypt.compareSync(req.body.password, user.password)) {
        throw new Error('Invalid credentials');
      }


      const payload = {
        id: user._id,
        email: user.email
      }

      const token = jwt.sign(payload, process.env.AUTH_SECRET, {
        expiresIn: '50m'
      }); 

      res.send({
        error: false,
        message: 'User logged in',
        token: token
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
      await User.findByIdAndUpdate(req.user.id, req.body);
      if (!req.body.confirmPASS === req.body.password) {
        throw new Error('Incorrect Password')
      }

      res.send({
        error: false,
        message: `User ${req.body.first_name} has been updated.`
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
      res.send(token);
    }
    catch (err) {
      res.send({
        err: true,
        message: err.message
      })
    }
  },
  getUpdate: async (req, res) => {
    try {
      user = await User.findById(req.user.id);
      res.send({
        error: false,
        message: `User ${req.user.first_name}`,
        user: user
      })
    }
    catch (err) {
      res.send({
        error: true,
        message: error.message
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