import { PrismaService } from 'src/database/prisma.service';
import { ClientRepository } from '../client-repository';
import { Injectable } from '@nestjs/common';
import { Client, ClientProps } from 'src/entities/client';

@Injectable()
export class PrismaClientRepository implements ClientRepository {
  constructor(private prisma: PrismaService) {}
  async update(id: string, name: string, birthday: Date): Promise<ClientProps> {
    const cliente = await this.prisma.client.update({
      where: {
        id,
      },
      data: {
        name,
        birthday,
      },
    });
    return cliente;
  }

  async delete(id: string): Promise<boolean> {
    await this.prisma.client.delete({
      where: { id },
    });
    return true;
  }

  async findUnique(id: string): Promise<ClientProps> {
    const client = await this.prisma.client.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return client;
  }

  async findAll(): Promise<ClientProps[]> {
    const cliente = await this.prisma.client.findMany();
    return cliente;
  }

  async create(cliente: Client): Promise<ClientProps> {
    const client = await this.prisma.client.create({
      data: {
        id: cliente.id,
        name: cliente.name,
        birthday: cliente.birthday,
      },
    });
    return client;
  }
}
