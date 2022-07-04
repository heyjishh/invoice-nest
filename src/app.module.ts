import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { InvoiceModule } from './invoice/invoice.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [InvoiceModule, ConfigModule.forRoot({
    isGlobal: true, // envFilePath : '.prod.env',
  }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule.forRoot({
        isGlobal: true,
      })],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    UserModule,],
  controllers: [],
  providers: [],
})
export class AppModule { }
