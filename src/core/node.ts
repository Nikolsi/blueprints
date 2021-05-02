import { IteratableOf } from './common/generics'
import { SchemaMap } from './common/map'

export type NodeSchema<Input = unknown, Output = unknown> = {
  input: IteratableOf<Input>
  output: IteratableOf<Output>
}

export class Node<
  Schema extends NodeSchema,
  Input = IteratableOf<Schema['input']>,
  Output = IteratableOf<Schema['output']>
> {
  private readonly _id: number
  private _name: string = ''
  private _input: SchemaMap<Input> = new SchemaMap<Input>()
  private _output: SchemaMap<Output> = new SchemaMap<Output>()

  static uid: number = -1
  static createUniqueId(): number {
    return ++Node.uid
  }

  constructor() {
    this._id = Node.createUniqueId()
  }

  get name(): string {
    return this._name
  }

  get id(): number {
    return this._id
  }

  get input(): SchemaMap<Input> {
    return this._input
  }

  get output(): SchemaMap<Output> {
    return this._output
  }

  setName(name: string): this {
    this._name = name
    return this
  }

  dispose(): this {
    this._input.clear()
    this._output.clear()
    // TODO: dispose connection
    return this
  }

  toString(): string {
    return `{"id":"${this._id}","name":"${this._name}","input":"${this._input.toString()}"}`
  }
}
