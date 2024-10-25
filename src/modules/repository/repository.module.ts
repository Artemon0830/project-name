import { Global, Module } from '@nestjs/common';

import { ArticleRepository } from './article.repository';
import { UserRepository } from './user.repository';

const repositories = [UserRepository, ArticleRepository];
@Global()
@Module({
  providers: [...repositories],
  exports: [...repositories],
})
export class RepositoryModule {}
