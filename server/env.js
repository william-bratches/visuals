require('dotenv').config({ silent: true });

module.exports = {
  root: process.env.NODE_ENV === 'production' ? 'dist' : 'crt',
  port: process.env.PORT,
};
