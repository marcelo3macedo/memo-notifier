import { Repository } from 'typeorm';
import { ApiDataSource } from '@shared/infra/typeorm';

import { IDifficultiesAPIRepository } from '@modules/difficulties/repositories/IDifficultiesAPIRepository';
import DifficultyAPI from '@modules/difficulties/entities/DifficultyAPI';

export class DifficultiesAPIRepository implements IDifficultiesAPIRepository {
  private repository: Repository<DifficultyAPI>;

  constructor() {
    this.repository = ApiDataSource.getRepository(DifficultyAPI);
  }

  async all(): Promise<DifficultyAPI[]> {
    return this.repository.createQueryBuilder('difficulty')
            .getMany();
  }
}