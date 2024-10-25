import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { LikeEntity } from '../../../database/entities/like.entity';

@Injectable()
export class UserRepository extends Repository<LikeEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(LikeEntity, dataSource.manager);
  }
}
