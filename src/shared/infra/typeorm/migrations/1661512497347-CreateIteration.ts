import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateIteration1661512497347 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'iteration',
              columns: [
                {
                  name: 'id',
                  type: 'char',
                  length: '64',
                  isPrimary: true,
                },
                {
                  name: 'sessionId',
                  type: 'char',
                  length: '64',
                },
                {
                    name: 'type',
                    type: 'varchar',
                },
                {
                    name: 'content',
                    type: 'varchar',
                },
                {
                    name: 'position',
                    type: 'integer',
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

        await queryRunner.createForeignKey(
            'iteration',
            new TableForeignKey({
              columnNames: ['sessionId'],
              referencedTableName: 'session',
              referencedColumnNames: ['id']
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('iteration')
    }

}
