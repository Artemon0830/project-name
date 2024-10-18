import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ArticlesModule } from './articles/articles.module';
import { CommentsModule } from './comments/comments.module';
import { UsersModule } from './users/users.module';
import configuration from './configs/configuration';

@Module({
  imports: [ArticlesModule, UsersModule, CommentsModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    })],
})
export class AppModule {}
