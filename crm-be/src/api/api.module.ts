import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { EmployeeModule } from "./employee/employee.module";
import { Department } from "./department/department.entity";
import { DepartmentModule } from "./department/department.module";
import { TeamModule } from "./team/team.module";
import { LeadModule } from "./lead/lead.module";
import { Task } from "./task/task.entity";
import { TaskModule } from "./task/task.module";
import { Tag } from "./tag/tag.entity";
import { TagModule } from "./tag/tag.module";
import { CustomerModule } from "./customer/customer.module";
import { ProductModule } from "./product/product.module";
import { BunnyModule } from "./bunny/bunny.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BunnyModule,
    EmployeeModule,
    DepartmentModule,
    TeamModule,
    LeadModule,
    TaskModule,
    TagModule,
    CustomerModule,
    ProductModule,
  ],
})
export class ApiModule {}
