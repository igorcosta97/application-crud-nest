import { Client, ClientProps } from 'src/entities/client';

export abstract class ClientRepository {
  abstract create(client: Client): Promise<ClientProps>;
  abstract findAll(): Promise<ClientProps[]>;
  abstract findUnique(id: string): Promise<ClientProps>;
  abstract update(
    id: string,
    name: string,
    birthday: Date,
  ): Promise<ClientProps>;
  abstract delete(id: string): Promise<boolean>;
}
