

/* Not going to use this file because we are not 
going to have a post type table. But keeping it for 
reference until finished.


const { Post_Type } = require('../models');

const postTypeData = [
  {
    post_type: 'Job Offers',
  },
  {
    post_type: 'Interview Tips',
  },
  {
    post_type: 'Bootcamp Experience',
  },
  {
    post_type: 'Question',
  },
];

const seedPostType = () => Post_Type.bulkCreate(postTypeData);

module.exports = seedPostType;