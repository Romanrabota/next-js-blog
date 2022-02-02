'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `CREATE TABLE Users (
        userId int(11) NOT NULL AUTO_INCREMENT,
        first_name varchar(255) DEFAULT NULL,
        last_name varchar(255) DEFAULT NULL,
        password varchar(45) NOT NULL,
        email varchar(45) NOT NULL,
        picture varchar(300) DEFAULT NULL,
        role enum('Admin','User') DEFAULT NULL,
        createdAt bigint(20) unsigned NOT NULL,
        updatedAt bigint(20) unsigned NOT NULL,
        PRIMARY KEY (userId)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`
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
