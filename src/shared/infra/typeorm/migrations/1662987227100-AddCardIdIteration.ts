import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddCardIdIteration1662987227100 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("iteration", new TableColumn({
            name: "cardId",
            type: 'char',
            length: '64',
            isNullable: true,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("iteration", "cardId");
    }

}
