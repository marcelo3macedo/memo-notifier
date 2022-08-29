import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddSessionNext1661514411263 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("session", new TableColumn({
            name: "nextId",
            type: 'char',
            length: '64',
            isNullable: true,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("session", "nextId");
    }

}
