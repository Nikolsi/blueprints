import { Node } from '../src'

function run() {
  type PersonSchema = {
    input: {
      name: string
      surname: string
      age: number
    }
    output: {}
  }
  const node = new Node<PersonSchema>()
  node.setName(`Node ${node.id}`)
  node.input.set('age', 50)
  console.log(node.toString())
  node.dispose()
}

run()
