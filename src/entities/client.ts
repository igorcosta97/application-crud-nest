import { randomUUID } from 'crypto';
export interface ClientProps {
  id: string;
  name: string;
  birthday: Date;
}

export class Client {
  private _id: string;
  private _name: string;
  private _birthday: Date;

  constructor(name: string, birthday: Date) {
    this._id = randomUUID();
    this._name = name;
    this._birthday = birthday;
  }

  public get id(): string {
    return this._id;
  }

  public set id(id: string) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get birthday(): Date {
    return this._birthday;
  }

  public set birthday(birthday: Date) {
    this._birthday = birthday;
  }
}
