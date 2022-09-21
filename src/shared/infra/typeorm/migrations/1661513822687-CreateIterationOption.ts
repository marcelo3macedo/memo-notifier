import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateIterationOption1661513822687 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'iteration_option',
              columns: [
                {
                  name: 'id',
                  type: 'char',
                  length: '64',
                  isPrimary: true,
                },
                {
                  name: 'iterationId',
                  type: 'char',
                  length: '64',
                },
                {
                    name: 'slug',
                    type: 'varchar',
                    length: '800',
                },
                {
                    name: 'content',
                    type: 'varchar',
                    length: '800',
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
            'iteration_option',
            new TableForeignKey({
              columnNames: ['iterationId'],
              referencedTableName: 'iteration',
              referencedColumnNames: ['id']
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('iteration_option')
    }

}
