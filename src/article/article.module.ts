import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleService } from './article.service';
import { Article } from './model/article.entity';
import { ArticleMutationResolver } from './resolvers/article.mutation.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [ArticleService, ArticleMutationResolver],
})
export class ArticleModule {}
