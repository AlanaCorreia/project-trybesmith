import dotenv from 'dotenv';
import jwt, { SignOptions } from 'jsonwebtoken';
import User from '../interfaces/usersInterface';

dotenv.config();

const secret = 'senhaSecreta';

const jwtConfig = {
  expiresIn: '3h',
  algorithm: 'HS256',
};

const generateJWT = (payload: Omit<User, 'password'>) => {
  const token = jwt.sign({ data: payload }, secret, jwtConfig as SignOptions);

  return token;
};

export default generateJWT;