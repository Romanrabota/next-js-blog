'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `
      CREATE TABLE users(
         userId int(11) NOT NULL AUTO_INCREMENT,
         firstName varchar(255) NOT NULL,
         lastName varchar(255) NOT NULL,
        password varchar(45) NOT NULL,
        email varchar(45) NOT NULL,
        picture varchar(300) DEFAULT NULL,
        role enum('Admin','User','Guest') NOT NULL DEFAULT 'Guest',
        createdAt bigint(20) DEFAULT NULL,
        updatedAt bigint(20) DEFAULT NULL,
        PRIMARY KEY (userId),
        UNIQUE KEY idx_user_email (email)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
      `
    );
    
    
  
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
   
   
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
