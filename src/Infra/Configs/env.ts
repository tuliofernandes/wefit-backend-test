export class EnvAdapter {
  static http = {
    listenPort: Number(process.env.HTTP_PORT) ?? 4568,
  };

  static readonly databaseSettings = {
    authentication: {
      host: process.env.MYSQLDB_HOST ?? "",
      port: Number(process.env.MYSQLDB_PORT) ?? 3306,
      username: process.env.MYSQL_USER ?? "",
      password: process.env.MYSQLDB_PASSWORD ?? "",
      database: process.env.MYSQLDB_DATABASE ?? "",
    },
  };
}
