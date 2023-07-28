const Comment = require("../models/comments.model");

// todo: implement submit comment
const submitComment = async (req, res) => {
  try {
    const comment = new Comment({
      username: req.body.username,
      comment: req.body.comment,
    });
    const commentSave = await comment.save();
    res.json(commentSave);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// todo: implemnt get all comments
const getListComment = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  submitComment,
  getListComment,
};
