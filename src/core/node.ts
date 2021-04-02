import { Vector2 } from './common/interfaces'

export class Node {
  private readonly _id: number
  private _name: string = ''
  private _position: Vector2 = { x: 0, y: 0 }

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

  setName(name: string): this {
    this._name = name
    return this
  }

  toString(): string {
    return `{ id: ${this._id}, name: ${this._name} }`
  }
}
