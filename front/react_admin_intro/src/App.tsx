import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { UserList, UserEdit, UserCreate } from "./components/users/users";
import { PostList, PostEdit, PostCreate } from "./components/posts/posts";
import { Dashboard } from "./components/dashboard/dashboard";
import { authProvider } from "./authProvider";
import {
  CommentCreate,
  CommentEdit,
  CommentList,
} from "./components/comments/comments";
import { AlbumCreate, AlbumEdit, AlbumList } from "./components/albums/albums";
import { PhotoCreate, PhotoEdit, PhotoList } from "./components/photos/photos";
import { TodoCreate, TodoEdit, TodoList } from "./components/todos/todos";

export const App = () => (
  <Admin
    authProvider={authProvider}
    layout={Layout}
    dataProvider={dataProvider}
    dashboard={Dashboard}
  >
    {/* <Resource name="users" list={ListGuesser} /> */}
    <Resource
      name="users"
      list={UserList}
      create={UserCreate}
      edit={UserEdit}
      show={ShowGuesser}
    />
    {/* <Resource name="posts" list={ListGuesser} /> */}
    <Resource
      name="posts"
      list={PostList}
      show={ShowGuesser}
      create={PostCreate}
      edit={PostEdit}
    />
    {/* ésta es la manera de interactuar con la data, usando éstos componentes "Resource" */}
    <Resource
      name="comments"
      list={CommentList}
      show={ShowGuesser}
      create={CommentCreate}
      edit={CommentEdit}
    />
    <Resource
      name="albums"
      list={AlbumList}
      show={ShowGuesser}
      create={AlbumCreate}
      edit={AlbumEdit}
    />
    <Resource
      name="photos"
      list={PhotoList}
      show={ShowGuesser}
      create={PhotoCreate}
      edit={PhotoEdit}
    />
    <Resource
      name="todos"
      list={TodoList}
      show={ShowGuesser}
      create={TodoCreate}
      edit={TodoEdit}
    />
  </Admin>
);
