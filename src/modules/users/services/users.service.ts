import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { Config } from '../../../configs/config.type';
import { IUserData } from '../../auth/interfaces/user-data.interface';
import { UserRepository } from '../../repository/ services/user.repository';
import { UpdateUserReqDto } from '../dto/req/update-user.req.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly configService: ConfigService<Config>,
    private userRepository: UserRepository,
  ) {}

  public async findMe(userData: IUserData) {
    return `This action returns a #${userData.userId} user`;
  }
  public async updateMe(userData: IUserData, dto: UpdateUserReqDto) {
    return `This action updates a #${userData.userId} user`;
  }

  public async removeMe(userData: IUserData) {
    return `This action removes a #${userData.userId} user`;
  }

  public async findOne(id: number) {
    return `This action returns a #${id} user`;
  }
}
