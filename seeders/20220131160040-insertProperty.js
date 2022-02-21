'use strict';

const faker = require(`faker`);
const { QueryTypes } = require(`sequelize`);

module.exports = {
  async up (queryInterface, Sequelize) {
    const Users = await queryInterface.sequelize.query("SELECT * FROM users WHERE role = 'user'", { type: QueryTypes.SELECT });
   // const id = await queryInterface.sequelize.query("SELECT 'id_user' FROM Users WHERE role = 'User'", { type: QueryTypes.SELECT });
    //const Review = await queryInterface.sequelize.query("SELECT * FROM reviews", { type: QueryTypes.SELECT });

    let PropertyData=[];
    let amountProperty = 25;
  
    for (let i=0; i<Users.length; i++) { 
      for (let j = 0; j < amountProperty; j++) {
          PropertyData.push(
          {         
            propertyName:faker.company.companyName(),
            userId:Users[i].userId,
            price:faker.finance.amount(),
            description:faker.lorem.sentences(),
            picture:`https://robohash.org/${i}${j}.png?set=set4`,
            createdAt: Date.now(),
            updatedAt: Date.now()
          }
        );
      }
    }

    return queryInterface.bulkInsert('properties', PropertyData, {}); 
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
    await queryInterface.bulkDelete('properties', null, {})    
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

