module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'mongoose',
        settings: {
          host: env('DATABASE_HOST', 'strapi-cluster.6w5kn.mongodb.net'),
          srv: env.bool('DATABASE_SRV', true),
          port: env.int('DATABASE_PORT', 27017),
          database: env('DATABASE_NAME', 'backend'),
          username: env('DATABASE_USERNAME', 'strapi'),
          password: env('DATABASE_PASSWORD', 'od2gLoUif5UFLuZF'),
        },
        options: {
          authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
          ssl: env.bool('DATABASE_SSL', true),
        },
      },
    },
  });
  