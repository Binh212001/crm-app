import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common";
import { TaskService } from "./services/task.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { Task } from "./task.entity";
import { ListTaskReq } from "./dto/list-task-req.dto";
import { OffsetPaginatedDto } from "@/common/dto/offset-pagination/paginated.dto";
import { ApiAuth } from "@/decorators/http.decorators";

@Controller("tasks")
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @ApiAuth({
    type: CreateTaskDto,
    description: "Create a new task",
  })
  @Post()
  create(@Body() createDto: CreateTaskDto): Promise<Task> {
    return this.taskService.create(createDto);
  }

  @ApiAuth({
    type: ListTaskReq,
    description: "Get all tasks with pagination",
  })
  @Get()
  findMany(@Query() query: ListTaskReq): Promise<OffsetPaginatedDto<Task>> {
    return this.taskService.findMany(query);
  }

  @ApiAuth({
    type: String,
    description: "Get task by ID",
  })
  @Get(":id")
  findOne(@Param("id") id: string): Promise<Task> {
    return this.taskService.findOne(id);
  }

  @ApiAuth({
    type: UpdateTaskDto,
    description: "Update task by ID",
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateDto: UpdateTaskDto
  ): Promise<Task> {
    return this.taskService.update(id, updateDto);
  }

  @ApiAuth({
    type: String,
    description: "Delete task by ID",
  })
  @Delete(":id")
  remove(@Param("id") id: string): Promise<void> {
    return this.taskService.remove(id);
  }
}
