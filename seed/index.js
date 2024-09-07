const sequelize = require('../config/connection');
const { User } = require("../models");
const userdata = require("./userdata.seed");


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  let seededUsers = []
  try {
    seededUsers = await User.bulkCreate(userdata, {
      individualHooks: true,
      returning: true
    })
  } catch(err) {
    console.log(`Seeding failed: ${err.message}`)
  }

  console.log(`${seededUsers.length} users have been created.`)


  /* ===== any more seed operations go here ==================== */







  console.log("Seeding complete!")
  process.exit(0);
}

seedDatabase();