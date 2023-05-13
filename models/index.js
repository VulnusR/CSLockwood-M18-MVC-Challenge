
const Post = require('./post');
const Comment = require('./comment');
const User = require('./user');

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "cascade"
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade"
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade"
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "cascade"
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "cascade"
});

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: 'cascade'
});


module.exports = { User, Post, Comment };