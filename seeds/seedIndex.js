const sequelize = require('../config/connection');

const seedUsers = require('./userSeed');
const seedPosts = require('./postSeed');
const seedComments = require('./commentSeed');

const seedAll = async () => {
  await sequelize.sync({ force: true });
    console.log('______Database Synced______')

  await seedUsers();
    console.log('______Users Seeded______')

  await seedPosts();
    console.log('______Posts Seeded______')

  await seedComments();
   console.log('______Comments Seeded______')

  process.exit(0);
};

seedAll();