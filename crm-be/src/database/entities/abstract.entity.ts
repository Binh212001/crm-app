import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DataSource,
  UpdateDateColumn,
} from "typeorm";
import { getOrder, Order } from "../decorators/order.decorator";

export abstract class AbstractEntity extends BaseEntity {
  @Order(9999)
  @CreateDateColumn({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  createdAt!: Date;

  @Order(9999)
  @Column({
    type: "varchar",
    nullable: true,
  })
  createdBy!: string;

  @Order(9999)
  @UpdateDateColumn({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  updatedAt!: Date;

  @Order(9999)
  @Column({
    type: "varchar",
    nullable: true,
  })
  updatedBy!: string;

  static useDataSource(dataSource: DataSource) {
    BaseEntity.useDataSource.call(this, dataSource);
    const meta = dataSource.entityMetadatasMap.get(this);
    if (meta != null) {
      // reorder columns here
      meta.columns = [...meta.columns].sort((x, y) => {
        const orderX = getOrder((x.target as any)?.prototype, x.propertyName);
        const orderY = getOrder((y.target as any)?.prototype, y.propertyName);
        return orderX - orderY;
      });
    }
  }
}
