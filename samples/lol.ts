import { IteratableOf } from '../src/core/common/generics'

type NodeExecuteFunction<I, O> = (input: I) => O
class Node<I extends {}, O> {
  input: I = {} as I
  output!: O
  private _onExecute: NodeExecuteFunction<I, O> | undefined = undefined
  execute(): void {
    if (this._onExecute && this.input) {
      this.output = this._onExecute(this.input)
    }
    console.log(this.output)
    // console.log(this.input)
  }
  setExecute(clbk: NodeExecuteFunction<I, O> | undefined): this {
    this._onExecute = clbk
    return this
  }
}

// const nodeLessThan = new Node<{ a: number; b: number }, boolean>()
// nodeLessThan.input.a = 100
// nodeLessThan.input.b = 200
// nodeLessThan.setExecute(({ a, b }) => a < b)
// nodeLessThan.execute() // true

// const nodeStringProcess = new Node<string, string>()
// nodeStringProcess.input = 'THIS-IS-KEBAB-STYLE'
// nodeStringProcess.setExecute((input) => input.split('-').join('_').toLowerCase())
// nodeStringProcess.execute() // 'this_is_kebab_style'

const nodeArrayRandom = new Node<
  {
    min: number
    max: number
    length: number
  },
  number[]
>()
nodeArrayRandom.input.length = 10
nodeArrayRandom.input.min = 0
nodeArrayRandom.input.max = 10
nodeArrayRandom.setExecute(({ min, max, length }) => {
  return Array.from(Array<number>(length), () => (Math.random() * (max + 1) + min) | 0)
})
nodeArrayRandom.execute() // [7, 7, 4, 10, 1, 3, 10, 10, 3, 1]

const nodeArraySort = new Node<Array<number>, Array<number>>()
nodeArraySort.input = nodeArrayRandom.output
nodeArraySort.setExecute((arr) => arr.sort((a, b) => a - b))
nodeArraySort.execute() // [ 1, 1,  3,  3,  4, 7, 7, 10, 10, 10]
