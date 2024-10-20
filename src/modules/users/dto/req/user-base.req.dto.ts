import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotIn,
  IsOptional,
  IsString,
  Length,
  Matches,
  Max,
  Min, Validate, ValidateIf,
  ValidateNested,
} from 'class-validator';
import { TransformHelper } from '../../../../common/helpers/transform.helper';
import { EnumGender } from '../../enums/gender.enum';

export class CarBaseReqDto {
  @IsString()
  @Transform(TransformHelper.trim)
  @Transform(TransformHelper.toLowerCase)
  @Length(3, 50)
  producer: string;

  @IsString()
  @Transform(TransformHelper.trim)
  @Transform(TransformHelper.toLowerCase)
  @Length(3, 50)
  model: string;

  @Type(() => Number)
  @ApiProperty({example:2022})
  @IsInt()
  @Min(1900)
  @Max(2024)
  year: number;

}
export class UserBaseReqDto {
  @IsString()
  @Transform(TransformHelper.trim)
  @Transform(TransformHelper.toLowerCase)
  @Length(3, 50)
  name: string;

  @IsInt()
  @Min(1)
  @Max(100)
  @IsOptional()
  age?: number;

  @IsString()
  @Transform(TransformHelper.trim)
  @Transform(TransformHelper.toLowerCase)
  @ValidateIf((obj) => !obj.phone )
  @ApiProperty({example:'example@.com'})
  @Matches (/@/ )
  email: string;

  @ValidateIf((obj) => !obj.email )
  @Transform(TransformHelper.trim)
  @Transform(TransformHelper.toLowerCase)
  @IsString()
  phone: string;

  @IsOptional()
  @IsEnum(EnumGender)
  gender: EnumGender;

  @IsBoolean()
  @Transform(TransformHelper.trim)
  @IsOptional()
  isStudent: boolean=false;
  @IsNotIn(['password','123456789','admin','user','qwerty'])
  @ApiProperty({example:'fas234AA'})
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
  message: 'Password must contain at least one uppercase letter, one lowercase letter and one number, and at least 8 characters long'
})
  password: string;

  @ValidateNested({ each: true})
  @Type(() => CarBaseReqDto)
  @IsArray()
  cars: CarBaseReqDto[];
}
