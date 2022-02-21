import { Sequelize } from 'sequelize';
import config from '../config';

const sequelize = new Sequelize(  
  config.db.database,
  config.db.username,
  config.db.password,
  {
      dialect: config.db.dialect,
  });

export default sequelize;