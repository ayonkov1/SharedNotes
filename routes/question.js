const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const Question = require('../models/Question');
const { ObjectId } = require('mongodb');

// @route    POST api/question
// @desc     Add a Question user
// @access   Public
router.post(
  '/addQuestion',
  [check('title', 'Title is required').not().isEmpty()],
  auth,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { title, description } = req.body;
      let userId = req.user.id;
      console.log(userId);
      let question = new Question({
        user: userId,
        title,
        description,
      });

      await question.save(function (error, obj) {
        if (error) res.status(400).send(error);
        res.json({ obj });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route    GET api/UserQuestions
// @desc     List of all User Questions
// @access   Public
router.get('/UserQuestions', auth, async (req, res) => {
  console.log(req.user.id);
  try {
    let questions = await Question.find({
      user: ObjectId(req.user.id),
    });
    console.log(questions);
    res.json({ questions });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    GET api/LikeQuestions
// @desc     Like a  Questions
// @access   Public
router.post('/LikeUserQuestions', auth, async (req, res) => {
  try {
    console.log('Like=');
    const { QuestionId } = req.body;

    console.log(QuestionId);
    let userQuestion = await Question.find({
      _id: QuestionId,
      liked: { $in: [req.user.id] },
    });
    console.log(userQuestion);
    if (userQuestion.length <= 0) {
      let likeQuestion = await Question.update(
        { _id: QuestionId },
        { $push: { liked: req.user.id } }
      );
      res.json({ likeQuestion });
    } else {
      res.json({ msg: 'Already Liked' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    GET api/UnLikeQuestions
// @desc     UnLike a  Questions
// @access   Public
router.post('/UnLikeUserQuestions', auth, async (req, res) => {
  try {
    const { QuestionId } = req.body;

    console.log(QuestionId);
    let userQuestion = await Question.find({
      _id: QuestionId,
      liked: { $in: [ObjectId(req.user.id)] },
    });
    console.log(userQuestion);
    if (userQuestion.length > 0) {
      let likeQuestion = await Question.update(
        { _id: QuestionId },
        { $pull: { liked: req.user.id } }
      );
      res.json({ likeQuestion });
    } else {
      res.json({ msg: 'Already UnLiked' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    GET api/Questions
// @desc     List of all  Questions
// @access   Public
router.get('/Questions', auth, async (req, res) => {
  console.log(req.user.id);
  try {
    let questions = await Question.find();
    console.log(questions);
    res.json({ questions });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    GET api/getTotalLikes
// @desc     Return how many questions user has liked
// @access   Public
router.get('/getTotalLikes', auth, async (req, res) => {
  console.log(req.user.id);
  try {
    let userLikes = await Question.find({
      liked: { $in: [req.user.id] },
    });

    console.log(userLikes.length);
    res.json({ userLikes: userLikes.length });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
