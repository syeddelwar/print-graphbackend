
module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'containers-us-west-23.railway.app'),
      port: env.int('DATABASE_PORT', 5804),
      database: env('DATABASE_NAME', 'railway'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'KIvi5bSRRIHKYdJs4tBL'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
