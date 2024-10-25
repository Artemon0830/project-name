import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { FollowEntity } from '../../../database/entities/follow.entity';

@Injectable()
export class ArticleRepository extends Repository<FollowEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(FollowEntity, dataSource.manager);
  }
}
