import { Client, ClientProps } from 'src/entities/client';

export abstract class ClientRepository {
  abstract create(client: Client): Promise<ClientProps>;
  abstract findAll(): Promise<ClientProps[]>;
}
