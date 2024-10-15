import { Module } from '@nestjs/common';

import { ArticlesModule } from './modules/articles/articles.module';
import { CommentsModule } from './modules/comments/comments.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [UsersModule, CommentsModule, ArticlesModule],
})
export class AppModule {}
