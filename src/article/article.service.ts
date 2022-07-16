import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  ArticleCreateInput,
  ArticleCreateOutput,
} from './dto/article-create.dto';
import {
  ArticleUpdateInput,
  ArticleUpdateOutput,
} from './dto/article-update.dto';
import { Article } from './model/article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepo: Repository<Article>,
  ) {}

  async articleCreate(input: ArticleCreateInput): Promise<ArticleCreateOutput> {
    const newArticle = this.articleRepo.create(input);
    const article = await this.articleRepo.save(newArticle);
    return { article };
  }

  async articleUpdate(
    articleId: Article['id'],
    input: ArticleUpdateInput,
  ): Promise<ArticleUpdateOutput> {
    const article = await this.articleRepo.findOneByOrFail({ id: articleId });
    article.title = input.title;
    article.description = input.description;
    article.image = input.image;
    const articleUpdated = await this.articleRepo.save(article);
    return { article: articleUpdated };
  }
}
