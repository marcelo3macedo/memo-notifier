import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1661449762186 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'user',
              columns: [
                {
                  name: 'id',
                  type: 'char',
                  length: '64',
                  isPrimary: true,
                },
                {
                  name: 'key',
                  type: 'varchar',
                },
                {
                  name: 'channelType',
                  type: 'varchar',
                },
                {
                  name: 'externalId',
                  type: 'varchar',
                  isNullable: true,
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
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user')
    }

}
