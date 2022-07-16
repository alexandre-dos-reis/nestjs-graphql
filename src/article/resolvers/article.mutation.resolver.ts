import { Args, Mutation } from '@nestjs/graphql';
import { ArticleService } from '../article.service';
import { ArticleCreateInput, ArticleCreateOutput } from '../dto/article-create';

export class ArticleMutationResolver {
  constructor(private readonly articleService: ArticleService) {}

  @Mutation(() => ArticleCreateOutput)
  async articleCreate(@Args('input') input: ArticleCreateInput) {
    return this.articleService.createArticle(input);
  }
}
