import { Body, Controller, Get, Post, Query,Request, Render,Response } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService:UserService
    ){}
    @Get()
    index(@Request() req:{[key:string]:any}){
        // console.log(req.signedCookies,'当前的cookie');
        console.log(req.session);
        
        return '主页'
    }
    @Post()
    async createUser(
        @Body() data:{[propName:string]:any}
    ):Promise<UserEntity>{
        return await this.userService.createUser(data)
    }
    //session
    @Get('login')
    login(
        @Response() res:{ [key:string]:any},
        @Request() req:{[key:string]:any}
    ):void{
        req.session.name='hello'
        res.send('登录页面')
    }
    //cookie
    // @Get('login')
    // login(@Response() res){
    //     //如果使用了res就不能使用return ，必须使用send
    //     // res.cookie('name','hello',{maxAge:1000*5,httpOnly:true})
    //     res.cookie('name','hello',{maxAge:1000*5,httpOnly:true,signed:true})
    //     res.send('登录页面')
    //     // console.log(123);
        
    // }
    //模板
    // @Get('login')
    // @Render('login')//渲染views里面得ejs模板
    // loginPage(){
    //     //这里得数据到时候加到数据库，服务层到时候直接从数据库拉去数据
    //     return {  
    //         'title':'登录页面'
    //     }
    // }

    // @Post()
    // login(@Body() body,@Response() res){
    //     console.log(body);
    //     res.redirect('/user')//重定向到用户首页
    //     //如果在控制器函数中使用了@Response()就不能使用return返回值
    // }
    @Get()
    async userList(
        @Query() query:any
    ):Promise<UserEntity[]>{
        return await this.userService.userList();
        
    }
}
