import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [UserModule,
  TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3307,
    username:'root',
    password:'root',
    database:'typeorm_mysql',
    synchronize:true,//自动同步数据模型到数据表中
    logging:false,
    entities:[
      __dirname+'/**/*.entity{.ts,.js}'
    ]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
