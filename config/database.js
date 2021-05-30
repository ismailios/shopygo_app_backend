module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 8889),
        database: env("DATABASE_NAME", "shopygo_mobile"),
        username: env("DATABASE_USERNAME", "root"),
        password: env("DATABASE_PASSWORD", "root"),
      },
      options: {},
    },
  },
});
