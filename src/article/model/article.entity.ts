import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType() // GraphQL object gettable
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field() // Graphql property gettable
  id: string;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  description: string;

  @Column()
  @Field(() => String)
  image: string;
}
