export type KeyOf<T> = keyof T
export type ValueOf<T, Property extends KeyOf<T> = KeyOf<T>> = T[Property]

export type IteratableOf<Type> = { [Property in KeyOf<Type>]: Type[Property] }
