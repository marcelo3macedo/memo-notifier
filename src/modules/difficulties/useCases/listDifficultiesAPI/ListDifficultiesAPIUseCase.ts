import { inject, injectable } from 'tsyringe';

import { IDifficultiesAPIRepository } from '@modules/difficulties/repositories/IDifficultiesAPIRepository';
import DifficultyAPI from '@modules/difficulties/entities/DifficultyAPI';

@injectable()
export class ListDifficultiesAPIUseCase {
  constructor(
    @inject('DifficultiesAPIRepository')
    private difficultiesAPIRepository: IDifficultiesAPIRepository
  ) {}

  async execute(): Promise<DifficultyAPI[]> {
    return this.difficultiesAPIRepository.all();
  }
}