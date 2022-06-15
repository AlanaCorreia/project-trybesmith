import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/usersInterface';

export default class UsersModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(user: User): Promise<User> {
    const { username, classe, level, password } = user;
    const [data] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?);',
      [username, classe, level, password],
    );

    const newUser = {
      id: data.insertId,
      username,
      classe,
      level,
      password,
    };

    return newUser;
  }
}