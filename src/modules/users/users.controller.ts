import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { IUserData } from '../auth/interfaces/user-data.interface';
import { UpdateUserReqDto } from './dto/req/update-user.req.dto';
import { UsersService } from './services/users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiBearerAuth()
  @Get('me')
  public async findMe(@CurrentUser() userData: IUserData) {
    return await this.usersService.findMe(userData);
  }
  @ApiBearerAuth()
  @Patch('me')
  public async updateMe(
    @CurrentUser() userData: IUserData,
    @Body() updateUserDto: UpdateUserReqDto,
  ) {
    return await this.usersService.updateMe(userData, updateUserDto);
  }
  @ApiBearerAuth()
  @Delete('me')
  public async removeMe(@CurrentUser() userData: IUserData) {
    return await this.usersService.removeMe(userData);
  }
  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(+id);
  }


}
