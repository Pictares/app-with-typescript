import * as PostActionCreators from './post'
import * as TodoActionCreators from './todo'

export default {
  ...PostActionCreators,
  ...TodoActionCreators,
}
