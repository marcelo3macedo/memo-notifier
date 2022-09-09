import DifficultyAPI from "../entities/DifficultyAPI";

export interface IDifficultiesAPIRepository {
  all(): Promise<DifficultyAPI[]>;
}