'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query (
      `CREATE TABLE Reviews (
        review_id int(11) NOT NULL AUTO_INCREMENT,
        user_id int(11) DEFAULT NULL,
        text varchar(255) DEFAULT NULL,
        mark int(11) DEFAULT NULL,
        createdAt bigint(20) NOT NULL,
        updatedAt bigint(20) NOT NULL,
        PRIMARY KEY (review_id),
        KEY fk_Reviews_Users_idx (user_id),
        CONSTRAINT fk_Reviews_Users FOREIGN KEY (user_id) REFERENCES Users (userId) ON DELETE SET NULL ON UPDATE CASCADE
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
    await queryInterface.dropTable('Reviews');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
