import DifficultyAPI from "@modules/difficulties/entities/DifficultyAPI";

export interface IDifficultiesAPIRepository {
  all(): Promise<DifficultyAPI[]>;
}