import { EXAMPLE_MUTATION } from './mutation-types'

export default {
  [EXAMPLE_MUTATION] (state) {
    state.exampleState = true
  }
}
