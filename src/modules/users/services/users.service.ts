import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { Config } from '../../../configs/config.type';
import { CreateUserReqDto } from '../dto/req/create-user.req.dto';
import { UpdateUserReqDto } from '../dto/req/update-user.req.dto';
import { UserResDto } from '../dto/res/user.res.dto';

@Injectable()
export class UsersService {
  constructor(private readonly configService: ConfigService<Config>) {}
  public async create(createUserDto: CreateUserReqDto): Promise<UserResDto> {
    const appConfig = this.configService.get<Config>('database');
    throw new ForbiddenException('safas');
    console.log(appConfig);
    return {} as UserResDto;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserReqDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  public async checkAbilityToEditArticle(userId: string, articleId: string) {
    // Check if the user has permission to edit the article
  }
}
