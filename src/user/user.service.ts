import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './Schema/user.Schema';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private UserMOdel: Model<UserDocument>) { }
  create(createUserDto: CreateUserDto) {

    // Signup user
    try {
      const model: any = new this.UserMOdel(createUserDto);
      if (model.name === '' || model.name === undefined || model.name === null) {
        throw new Error('Name is required');
      }
      if (model.email === '' || model.email === undefined || model.email === null) {
        throw new Error('Email is required');
      }
      if (model.phone === '' || model.phone === undefined || model.phone === null) {
        throw new Error('Phone is required');
      }
      if (model.password === '' || model.password === undefined || model.password === null) {
        throw new Error('Password is required');
      }
      if (model.userType === '' || model.userType === undefined || model.userType === null) {
        throw new Error('User type is required');
      }
      return model.save();
    }
    catch (error) {
      console.log(error.message);

    }
  }

  //signin
  signin() {
    try {
      const model = new this.UserMOdel();
      if (model.email === '' || model.email === undefined || model.email === null) {
        throw new Error('Email is required');
      }
      if (model.password === '' || model.password === undefined || model.password === null) {
        throw new Error('Password is required');
      }

      const user = this.UserMOdel.findOne({ email: model.email });
      if (!user) {
        throw new Error('User not found');
      } else {
        if (model.password === model.password) {
          return {
            status: true,
            message: 'Login success',
            data: user
          }
        } else {
          throw new Error('Password is incorrect');
        }
      }
    } catch (error) {
      console.log(error.message);
    }

  }

  // findAll
  async findAll(): Promise<any> {
    try {
      const FindUser = await this.UserMOdel.find({});
      if (!FindUser) {
        throw new Error('Users not found');
      } else {
        return {
          status: true,
          message: 'Users found',
          data: FindUser
        }
      }
    } catch (error) {
      console.log(error.message);
      return {
        status: false,
        message: error.message,
        data: null
      }
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
