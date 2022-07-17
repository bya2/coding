import { uuid } from "uuidv4";

export class Entity {
  protected _id: string;
  protected _name?: string;

  constructor() {
    this._id = uuid();
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  set name(input) {
    if (input && input.length > 0) {
      this._name = input;
    }
  }
}