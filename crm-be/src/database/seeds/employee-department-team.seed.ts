import { DataSource } from "typeorm";
import { Department } from "@/api/department/department.entity";
import { Team } from "@/api/team/team.entity";
import { Employee } from "@/api/employee/employee.entity";
import { v7 } from "uuid";
import { Seeder } from "typeorm-extension";
import { LeadStatus } from "@/api/lead/lead-status.entity";

export const leadStatus = new LeadStatus({
  id: "01973b6a-252a-774e-aaa1-48ce446af2cd",
  name: "New",
});

export default class CreateEmployeeDepartmentTeam implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const queryRunner = dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Create Departments
      const departments = [
        new Department({
          id: v7(),
          name: "Engineering",
          description: "Software development and technical operations",
        }),
        new Department({
          id: v7(),
          name: "Sales",
          description: "Sales and business development",
        }),
        new Department({
          id: v7(),
          name: "Marketing",
          description: "Marketing and communications",
        }),
        new Department({
          id: v7(),
          name: "Human Resources",
          description: "HR and talent management",
        }),
      ];

      const savedDepartments = await queryRunner.manager.save(departments);

      // Create Teams
      const teams = [
        new Team({
          id: v7(),
          name: "Backend Development",
          description: "Backend development team",
          department: savedDepartments[0],
        }),
        new Team({
          id: v7(),
          name: "Frontend Development",
          description: "Frontend development team",
          department: savedDepartments[0],
        }),
        new Team({
          id: v7(),
          name: "Sales Operations",
          description: "Sales operations team",
          department: savedDepartments[1],
        }),
        new Team({
          id: v7(),
          name: "Digital Marketing",
          description: "Digital marketing team",
          department: savedDepartments[2],
        }),
        new Team({
          id: v7(),
          name: "Talent Acquisition",
          description: "Talent acquisition team",
          department: savedDepartments[3],
        }),
      ];

      const savedTeams = await queryRunner.manager.save(teams);

      // Create Employees
      const employees = [
        new Employee({
          id: v7(),
          firstName: "John",
          lastName: "Doe",
          email: "john.doe@example.com",
          phone: "+1234567890",
          position: "Senior Backend Developer",
          address: "123 Tech Street",
          dateOfBirth: new Date("1990-01-15"),
          hireDate: new Date("2020-01-01"),
          isActive: true,
          team: savedTeams[0],
        }),
        new Employee({
          id: v7(),
          firstName: "Jane",
          lastName: "Smith",
          email: "jane.smith@example.com",
          phone: "+1234567891",
          position: "Frontend Developer",
          address: "456 Web Avenue",
          dateOfBirth: new Date("1992-05-20"),
          hireDate: new Date("2021-03-15"),
          isActive: true,
          team: savedTeams[1],
        }),
        new Employee({
          id: v7(),
          firstName: "Mike",
          lastName: "Johnson",
          email: "mike.johnson@example.com",
          phone: "+1234567892",
          position: "Sales Manager",
          address: "789 Sales Road",
          dateOfBirth: new Date("1988-11-10"),
          hireDate: new Date("2019-06-01"),
          isActive: true,
          team: savedTeams[2],
        }),
        new Employee({
          id: v7(),
          firstName: "Sarah",
          lastName: "Williams",
          email: "sarah.williams@example.com",
          phone: "+1234567893",
          position: "Marketing Specialist",
          address: "321 Market Street",
          dateOfBirth: new Date("1991-07-25"),
          hireDate: new Date("2022-01-10"),
          isActive: true,
          team: savedTeams[3],
        }),
        new Employee({
          id: v7(),
          firstName: "David",
          lastName: "Brown",
          email: "david.brown@example.com",
          phone: "+1234567894",
          position: "HR Manager",
          address: "654 HR Boulevard",
          dateOfBirth: new Date("1985-03-30"),
          hireDate: new Date("2018-09-01"),
          isActive: true,
          team: savedTeams[4],
        }),
      ];

      await queryRunner.manager.save(employees);
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }
}
