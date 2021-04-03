export class SchemaMap<Schema> {
  private _map = new Map()

  set<Key extends keyof Schema>(key: Key, value: Schema[Key]): this {
    this._map.set(key, value)
    return this
  }

  clear(): this {
    this._map.clear()
    return this
  }
}
