import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store/rootStore";
import { boundRequestTodos } from "../store/todo/TodoAction";
import { Todo } from "../store/todo/models/Todo";

const MainPage = () => {
   const dispatch = useDispatch();
   const state = useSelector((state: AppState) => state.todo);

   const clickHandler = async () => {
      dispatch(await boundRequestTodos())
   }

   return (
      <div>
         <h1>MainPage</h1>
         {state.todos.length > 0 && (
            (state.todos as Todo[]).map((todo: Todo) => (
               <ul key={todo.userId}>
                  <li>{todo.userId}</li>
                  <li>{todo.id}</li>
                  <li>{todo.title}</li>
                  <li>{todo.completed}</li>
               </ul>
            ))
         )}
         {state.error !== "" && (
            <h2>{state.error}</h2>
         )
         }
         <button onClick={clickHandler}>hello</button>
      </div>
   )
};

export default MainPage;