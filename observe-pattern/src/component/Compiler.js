import Header from './Header.js'
import { PostList } from './postlist.js'
import store from '../store.js'

export const ComponentCompiler = (state, root) => {
  return {
    header : new Header(state, root),
    postlist : new PostList(state, root)
  }
}