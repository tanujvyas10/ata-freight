const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Post model
const Loan = require('../../models/Loan');
// Profile model
const Profile = require('../../models/Profile');

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Loan Works' }));

// @route   GET api/posts
// @desc    Get posts
// @access  Public
router.get('/', (req, res) => {
  Loan.find()
    .sort({ date: -1 })
    .then(loans => res.json(loans))
    .catch(err => res.status(404).json({ noloansfound: 'No loans found' }));
});

// @route   GET api/posts/:id
// @desc    Get post by id
// @access  Public
router.get('/:id', (req, res) => {
  Loan.findById(req.params.id)
    .then(loan => res.json(loan))
    .catch(err =>
      res.status(404).json({ noloanfound: 'No loan found with that ID' })
    );
});

// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {


    const newLoan = new Loan({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    });

    newLoan.save().then(loan => res.json(loan));
  }
);


module.exports = router;
