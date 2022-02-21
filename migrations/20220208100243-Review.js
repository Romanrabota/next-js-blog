'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `
      CREATE TABLE reviews (
        reviewId int(11) NOT NULL AUTO_INCREMENT,
        feedback varchar(400) DEFAULT NULL,
        rate int(11) DEFAULT NULL,
        propertyId int(11) DEFAULT NULL,
        userId int(11) DEFAULT NULL,
        createdAt bigint(20) DEFAULT NULL,
        updatedAt bigint(20) DEFAULT NULL,
        PRIMARY KEY (reviewId),
        KEY fk_reviews_properties_idx (propertyId),
        KEY fk_reviews_users_idx (userId),
        CONSTRAINT fk_reviews_properties FOREIGN KEY (propertyId) REFERENCES properties (propertyId) ON DELETE CASCADE ON UPDATE NO ACTION,
        CONSTRAINT fk_reviews_users FOREIGN KEY (userId) REFERENCES users (userId) ON DELETE SET NULL ON UPDATE NO ACTION
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
    await queryInterface.dropTable('reviews');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
