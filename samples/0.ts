import { Node } from '../src'

function createNode(): Node {
  const node = new Node()
  return node.setName(`Node ${node.id}`)
}

function run() {
  for (let index = 0; index < 15; index++) {
    const node = createNode()
    console.log(node.toString())
  }
}

run()
