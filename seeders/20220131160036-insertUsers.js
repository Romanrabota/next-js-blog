'use strict';
const faker = require (`faker`);



module.exports = {
  async up (queryInterface, Sequelize) {

  let usersData=[];
  let amountUsers = 10;
  
  usersData.push(
    {
      first_name: "Admin",
      last_name: "Admin",
      role: "Admin",
      email: "admin",
      password: "Admin",
      createdAt: Date.now(),
      updatedAt: Date.now()
    }
  );

  for (let i = 0; i < amountUsers; i++)
  {
    usersData.push(
      {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        role: "User",
        email: faker.internet.email(),
        password: faker.internet.password(),
        picture:  faker.image.avatar(),
        createdAt: Date.now(),
        updatedAt: Date.now()
      }
    );
  }

  return queryInterface.bulkInsert('Users', usersData, {});
  
    /**
    * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})


    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
