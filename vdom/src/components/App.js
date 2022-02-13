import { Header } from './Header.js'
import { PostList } from './PostList.js';
import { Pagination } from './Pagination.js'; 
import { store } from '../store.js';

export const App = () =>{
  const { total, cur, data, startIdx } = store.state
  return  Header() + PostList() 
  // + Pagination()
} 

export const ComponentRenderer = {
  app : App,
  header : Header,
  postlist : PostList,
}
