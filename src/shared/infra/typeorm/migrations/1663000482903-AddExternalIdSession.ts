import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddExternalIdSession1663000482903 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("session", new TableColumn({
            name: "externalId",
            type: 'char',
            length: '64',
            isNullable: true,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("session", "externalId");
    }

}
