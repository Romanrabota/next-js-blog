'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `
      CREATE TABLE properties (
        propertyId int(11) NOT NULL AUTO_INCREMENT,
        propertyName varchar(45) DEFAULT NULL,
        userId int(11) DEFAULT NULL,
        price int(11) DEFAULT NULL,
        description text,
        picture varchar(45) DEFAULT NULL,
        createdAt bigint(20) DEFAULT NULL,
        updatedAt bigint(20) DEFAULT NULL,
        PRIMARY KEY (propertyId),
        KEY fk_properties_users_idx (userId),
        CONSTRAINT fk_properties_users FOREIGN KEY (userId) REFERENCES users (userId) ON DELETE CASCADE ON UPDATE NO ACTION
      ) ENGINE=InnoDB AUTO_INCREMENT=251 DEFAULT CHARSET=utf8;


      
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
    await queryInterface.dropTable('Property');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
