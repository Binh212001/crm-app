import { Injectable, NotFoundException } from "@nestjs/common";
import { TaskRepository } from "../task.repository";
import { CreateTaskDto } from "../dto/create-task.dto";
import { UpdateTaskDto } from "../dto/update-task.dto";
import { Task } from "../task.entity";
import { LeadService } from "../../lead/services/lead.service";
import { paginate } from "@/utils/offset-pagination";
import { OffsetPaginatedDto } from "@/common/dto/offset-pagination/paginated.dto";
import { ListTaskReq } from "../dto/list-task-req.dto";
import { EmployeeRepository } from "@/api/employee/employee.repository";

@Injectable()
export class TaskService {
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly leadService: LeadService,
    private readonly employeeRepository: EmployeeRepository
  ) {}

  async create(createDto: CreateTaskDto): Promise<Task> {
    const lead = await this.leadService.findOne(createDto.leadId);
    const assignedTo = await this.employeeRepository.findOne({
      where: { id: createDto.assignedToId },
    });

    const task = this.taskRepository.create({
      ...createDto,
      lead,
      assignedTo,
    });

    return this.taskRepository.save(task);
  }

  async findMany(dto: ListTaskReq): Promise<OffsetPaginatedDto<Task>> {
    const { q, status, employeeId } = dto;
    const query = this.taskRepository
      .createQueryBuilder("task")
      .leftJoinAndSelect("task.lead", "lead")
      .leftJoinAndSelect("task.assignedTo", "assignedTo");

    if (q) {
      query.andWhere("(task.title ILIKE :q OR task.description ILIKE :q)", {
        q: `%${q}%`,
      });
    }

    if (status) {
      query.andWhere("task.status = :status", { status });
    }

    if (employeeId) {
      query.andWhere("assignedTo.id = :employeeId", { employeeId });
    }

    const [base, metaDto] = await paginate<Task>(query, dto, {
      skipCount: false,
      takeAll: false,
    });

    return new OffsetPaginatedDto(base, metaDto);
  }

  async findOne(id: string): Promise<Task> {
    const task = await this.taskRepository.findOne({
      where: { id },
      relations: ["lead", "assignedTo"],
    });

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return task;
  }

  async update(id: string, updateDto: UpdateTaskDto): Promise<Task> {
    const task = await this.findOne(id);

    if (updateDto.assignedToId) {
      const assignedTo = await this.employeeRepository.findOne({
        where: { id: updateDto.assignedToId },
      });
      task.assignedTo = assignedTo;
    }

    Object.assign(task, updateDto);
    return this.taskRepository.save(task);
  }

  async remove(id: string): Promise<void> {
    const task = await this.findOne(id);
    await this.taskRepository.remove(task);
  }
}
