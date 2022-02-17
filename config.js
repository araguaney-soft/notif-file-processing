module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || '127.0.0.1',
    PORT: process.env.PORT || 80,
    DAPR_HTTP_PORT: process.env.DAPR_HTTP_PORT || 3500,
    TABLE_STORAGE: process.env.TABLE_STORAGE || 'message'
  }