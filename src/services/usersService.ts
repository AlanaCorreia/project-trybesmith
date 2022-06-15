import User from '../interfaces/usersInterface';
import connection from '../models/connection';
import UsersModel from '../models/usersModel';
import generateJWT from '../utils/generateJWT';

export default class UsersService {
  model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  async create(user: User): Promise<string> {
    const newUser = await this.model.create(user);

    const { password: passUser, ...userWithoutPass } = newUser;

    const token = generateJWT(userWithoutPass);

    return token;
  }
}