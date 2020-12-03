import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

// Entity是由@Entity装饰器装饰的模型。将为此类模型创建数据库表
@Entity()
export class UserEntity {
  // 下面定义的会自动在数据库中生成对应的字段
  // 主键且自动自增的
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}