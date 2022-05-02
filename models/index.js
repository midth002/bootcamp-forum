const User = require('./user');
const Post = require('./post');
// const Post_Type = require('./post_type');
// const Comments = require('./comments');

User.hasMany(Post, {
    foreignKey: 'post_id',
  });

Post.belongsTo(User, {
    foreignKey: 'post_id',
});



// Post.hasMany(Comments, {
//     foreignKey: 'comment_id',
// });

// Comments.belongsTo(Post, {
//     foreignKey: 'comment_id',
// });



// Post.belongsTo(Post_Type, {
//     foreignKey: 'post_type_id',
// });
// Post_Type.hasMany(Post, {
//     foreignKey: 'post_type_id',
// });



// User.hasMany(Comments, {
//     foreignKey: 'user_id',
// });
// Comments.belongsTo(User, {
//     foreignKey: 'user_id',
// });



module.exports = { User, Post};