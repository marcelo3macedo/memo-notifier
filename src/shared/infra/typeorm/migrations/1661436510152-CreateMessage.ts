import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMessage1661436510152 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'message',
              columns: [
                {
                  name: 'id',
                  type: 'char',
                  length: '64',
                  isPrimary: true,
                },
                {
                  name: 'message',
                  type: 'varchar',
                },
                {
                  name: 'userId',
                  type: 'varchar',
                },
                {
                  name: 'createdAt',
                  type: 'timestamp',
                  default: 'now()',
                  isNullable: true,
                },
                {
                  name: "deletedAt",
                  type: "timestamp",
                  isNullable: true,
                },
              ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('message');
    }

}
