'use strict';

const faker = require(`faker`);
const { QueryTypes } = require(`sequelize`);

module.exports = {
  async up (queryInterface, Sequelize) {
    const Property = await queryInterface.sequelize.query("SELECT * FROM properties", { type: QueryTypes.SELECT });
    const Users = await queryInterface.sequelize.query("SELECT * FROM users WHERE role = 'User'", { type: QueryTypes.SELECT });
 //  console.log(Users.userId);
    let ReviewData=[];
    let amountReview = 10;
  
  for (let i=0; i<Users.length; i++){ 
  for (let j = 0; j < amountReview; j++)
  {
    ReviewData.push(
      {        
        feedback:faker.lorem.sentences(),
        rate:faker.datatype.number(),
        propertyId:Property[i].propertyId,
        userId:Users[i].userId,
        createdAt: Date.now(),
        updatedAt: Date.now()
      }
    );
  }
}

  return queryInterface.bulkInsert('reviews', ReviewData, {}); 
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
    await queryInterface.bulkDelete('reviews', null, {})    
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
