import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateClientBody } from './dtos/create-client-body';
import { ClientRepository } from './repositories/client-repository';
import { Client } from './entities/client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private clientRepository: ClientRepository,
  ) {}

  @Get('/client')
  async getClient() {
    const cliente = await this.clientRepository.findAll();
    return cliente;
  }

  @Get('/client/:id')
  async getClientUnique(@Param('id') id: string) {
    const cliente = await this.clientRepository.findUnique(id);
    return cliente;
  }

  @Post('/client')
  async createClient(@Body() body: CreateClientBody) {
    const { name, birthday } = body;
    const cliente = new Client(name, birthday);
    const response = await this.clientRepository.create(cliente);
    return response;
  }

  @Put('/client/:id')
  async updateClient(@Body() body: CreateClientBody, @Param('id') id: string) {
    const cliente = await this.clientRepository.findUnique(id);
    if (!!cliente) {
      const { name, birthday } = body;

      const response = await this.clientRepository.update(id, name, birthday);
      return response;
    }
  }

  @Delete('/client/:id')
  async deleteClient(@Param('id') id: string) {
    const cliente = await this.clientRepository.findUnique(id);
    if (!!cliente) {
      this.clientRepository.delete(id);
      return 'Client deleted successfully';
    }
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
