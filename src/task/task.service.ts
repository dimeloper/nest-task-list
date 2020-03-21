import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}

  async createTask(createTaskDto: CreateTaskDto) {
    return this.taskRepository.createTask(createTaskDto);
  }

  async getTasks() {
    return this.taskRepository.getTasks();
  }

  async updateTask(id: string, done: boolean) {
    const transformedId: number = parseInt(id);
    return this.taskRepository.updateTask(
      transformedId,
      done ? 'true' : 'false',
    );
  }

  deleteTask(id: string) {
    const transformedId: number = parseInt(id);
    return this.taskRepository.deleteTask(transformedId);
  }
}
