const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  question: {
    type: String,
    required: true,
  },
  comments: [
    {
      content: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  like: {
    type: Number,
    default:0
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('question', QuestionSchema);
