export class EnvAdapter {
  static http = {
    listenPort: Number(process.env.HTTP_PORT || 4568),
  };

  static readonly databaseSettings = {
    authentication: {
      host: process.env.MYSQLDB_HOST ?? "localhost",
      port: Number(process.env.MYSQLDB_PORT) ?? 3306,
      username: process.env.MYSQL_USER ?? "root",
      password: process.env.MYSQLDB_PASSWORD ?? "senha_root_123",
      database: process.env.MYSQLDB_DATABASE ?? "wefit",
    },
  };
}
