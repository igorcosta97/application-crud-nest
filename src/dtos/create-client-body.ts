import { IsNotEmpty } from 'class-validator';

export class CreateClientBody {
  @IsNotEmpty({ message: 'Name is empty' })
  name: string;

  birthday: Date;
}
