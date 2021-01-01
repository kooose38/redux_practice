import { Dispatch } from "redux";
import { AppActions } from "../models/action";
import { FETCH_TODO_FAIL, FETCH_TODO_SUCCESS, FETCH_TODO_REQ } from "./models/action";
import { Todo } from "./models/Todo";
import { TodoActionTypes } from "./models/action"

//operations 
export const boundRequestTodos = async () => {
   return async (dispatch: Dispatch<TodoActionTypes>) => {
      try {
         dispatch({
            type: FETCH_TODO_REQ,
         });

         const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=5`)
         const todos = await res.json() as Todo[];
         dispatch({
            type: FETCH_TODO_SUCCESS,
            payload:
               todos,

         });

      } catch (e) {
         dispatch({
            type: FETCH_TODO_FAIL
         })
      }
   }
}