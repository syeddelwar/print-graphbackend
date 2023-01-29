
module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'containers-us-west-63.railway.app'),
      port: env.int('DATABASE_PORT', 5899),
      database: env('DATABASE_NAME', 'railway'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'QUdVLL9JPSYrtFgjIN6b'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
