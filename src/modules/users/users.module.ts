import { forwardRef, Module } from '@nestjs/common';

import { ArticlesModule } from '../articles/articles.module';
import { AuthModule } from '../auth/auth.module';
import { UsersAdminService } from './services/users-admin.service';
import { UsersService } from './services/users.service';
import { UsersController } from './users.controller';

import { UsersAdminController } from './users-admin.controller';


@Module({
  imports: [forwardRef(() => ArticlesModule)],
  controllers: [UsersController, UsersAdminController],
  providers: [UsersService, UsersAdminService],
  exports: [UsersService],
})
export class UsersModule {}
