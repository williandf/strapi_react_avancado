module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi2'),
        username: env('DATABASE_USERNAME', 'strapi1'),
        password: env('DATABASE_PASSWORD', 'strapi123'),
        ssl: { rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false)},
      },
      options: {}
    },
  },
})
