export class SchemaMap<Schema> {
  private _map: Schema = <Schema>{}

  set<Key extends keyof Schema>(key: Key, value: Schema[Key]): this {
    this._map[key] = value
    return this
  }

  clear(): this {
    this._map = <Schema>{}
    return this
  }

  toString() {
    return JSON.stringify(this._map)
  }
}
