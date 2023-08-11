import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Post('/client')
  async createClient(@Body() body: CreateClientBody) {
    const { name, birthday } = body;
    console.log(name, birthday);
    const cliente = new Client(name, birthday);
    console.log(cliente.birthday);
    const response = await this.clientRepository.create(cliente);

    return response;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
