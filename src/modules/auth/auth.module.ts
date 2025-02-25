import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';

import { RedisModule } from '../redis/redis.module';
import { AuthController } from './auth.controller';
import { JwtAccessGuard } from './guards/jwt-access.guard';
import { JwtRefreshGuard } from './guards/jwt-refresh.guard';
import { AuthService } from './services/auth.service';
import { AuthCacheService } from './services/auth-cathe-service';
import { TokenService } from './services/token.service';

@Module({
  imports: [JwtModule, RedisModule],
  controllers: [AuthController],
  providers: [
    { provide: APP_GUARD, useClass: JwtAccessGuard },
    JwtRefreshGuard,
    AuthService,
    AuthCacheService,
    TokenService,
    JwtAccessGuard,
  ],
  exports: [],
})
export class AuthModule {}
