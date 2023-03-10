'use strict';
const faker = require (`faker`);



module.exports = {
  async up (queryInterface, Sequelize) {

  let usersData=[];
  let amountUsers = 10;
  
  usersData.push(
    {
      firstName: "Admin",
      lastName: "Admin",
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
        firstName:faker.name.firstName(),
        lastName: faker.name.lastName(),
        role: "User",
        email: faker.internet.email(),
        password:faker.internet.password(),
        picture: "https://i.pravatar.cc/100",
        createdAt: Date.now(),
        updatedAt: Date.now()
      }
    );
  }

  return queryInterface.bulkInsert('users', usersData, {});
  
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
    await queryInterface.bulkDelete('users', null, {})


    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
