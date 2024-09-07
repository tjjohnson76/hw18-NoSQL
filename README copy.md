# Express Boilerplate 

This is the first iteration of an Express/Sequelize boilerplate for use by students.

## To Get Started

- Clone the repo
- Run `npm install` 
- Run the `db/schema.sql` file in the Postgres terminal 
- Rename the `.env` file and fill in the appropriate info
- Run the seed program: `node seed/index.js` 
- Launch the site:  `nodemon server.js` 

## Included

- Setup of a User model with password encryption at the model level 
- All basic CRUD routes for the User model
- A login route wired up and tested
- A sample homepage route wired up 
- Session scaffolding in place
- Seed file set up and ready to use