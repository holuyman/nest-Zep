import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common'

//引入包
import{  NestExpressApplication } from '@nestjs/platform-express'
import * as cookieParser from 'cookie-parser'
import * as session from 'express-session'
import { join } from 'path'

const PORT = process.env.PORT || 3000

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //配置静态文件得目录
  app.useStaticAssets(join(__dirname,'..','public'),{
    prefix:'/static'
  })
  //配置视图文件得目录
  
  app.setBaseViewsDir(join(__dirname,'..','views'))
  app.setViewEngine('ejs');
  app.use(cookieParser(process.env.SECRET)) //配合dotent包使用
  app.use(session({secret:'123455',cookie:{maxAge:60000}}))
  await app.listen(PORT,()=>{
    Logger.log(`服务已经启动，请访问：http://www.localhost:${PORT}`)
  });
}
bootstrap();
