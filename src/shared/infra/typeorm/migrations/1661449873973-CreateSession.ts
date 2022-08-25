import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateSession1661449873973 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'sessions',
              columns: [
                {
                  name: 'id',
                  type: 'char',
                  length: '64',
                  isPrimary: true,
                },
                {
                  name: 'userId',
                  type: 'char',
                  length: '64',
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
              ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('sessions')
    }

}
