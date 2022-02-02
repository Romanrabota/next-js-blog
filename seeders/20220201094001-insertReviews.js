'use strict';

const faker = require(`faker`);
const { QueryTypes } = require(`sequelize`);

module.exports = {
  async up (queryInterface, Sequelize) {
    const Users = await queryInterface.sequelize.query("SELECT * FROM Users WHERE role = 'User'", { type: QueryTypes.SELECT });
   // const id = await queryInterface.sequelize.query("SELECT 'id_user' FROM Users WHERE role = 'User'", { type: QueryTypes.SELECT });

    let ReviewData=[];
    let amountReview = 10;
  
  for (let i=0; i<Users.length; i++){ 
  for (let j = 0; j < amountReview; j++)
  {
    ReviewData.push(
      { 
        user_id:Users[i].userId,
        text:faker.datatype.string(),
        mark:faker.datatype.number(),
        createdAt: Date.now(),
        updatedAt: Date.now()
      }
    );
  }
}

  return queryInterface.bulkInsert('Reviews', ReviewData, {}); 
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
    await queryInterface.bulkDelete('Reviews', null, {})    
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
