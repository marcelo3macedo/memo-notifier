import { getRepository, Repository } from 'typeorm';

import { DATABASE_API } from '@constants/databases';
import { IDifficultiesAPIRepository } from '@modules/difficulties/repositories/IDifficultiesAPIRepository';
import DifficultyAPI from '@modules/difficulties/entities/DifficultyAPI';

export class DifficultiesAPIRepository implements IDifficultiesAPIRepository {
  private repository: Repository<DifficultyAPI>;

  constructor() {
    this.repository = getRepository(DifficultyAPI, DATABASE_API);
  }

  async all(): Promise<DifficultyAPI[]> {
    return this.repository.createQueryBuilder('difficulty')
            .getMany();
  }
}