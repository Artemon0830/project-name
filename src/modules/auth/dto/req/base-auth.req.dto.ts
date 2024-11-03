import { PickType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

import { BaseUserReqDto} from '../../../users/dto/req/user-base.req.dto';

export class BaseAuthReqDto extends PickType(BaseUserReqDto, [
  'name',
  'bio',
  'email',
  'password',
  'image',
]) {
  @IsNotEmpty()
  @IsString()
  readonly deviceId: string;
}
