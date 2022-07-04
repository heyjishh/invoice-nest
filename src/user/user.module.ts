import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { User, userSchema } from './Schema/user.Schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  // imports: [MongooseModule.forFeature([{ name: User.name, schema: userSchema }])],
  imports: [MongooseModule.forFeatureAsync([{ name: User.name, useFactory: () => userSchema }])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }
