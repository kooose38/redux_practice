import {
   FETCH_TODO_FAIL, FETCH_TODO_SUCCESS, FETCH_TODO_REQ, TodoActionTypes
} from "./models/action";
import { Todo } from "./models/Todo";

interface TodoState {
   loading: boolean,
   todos: Todo[] | [],
   error: string
};

const defaultState: TodoState = {
   loading: false,
   todos: [],
   error: "",
}


export const todoreducer = (state: TodoState = defaultState, action: any): TodoState => {
   switch (action.type) {
      case FETCH_TODO_REQ:
         return {
            ...state,
            loading: true
         }
      case FETCH_TODO_SUCCESS:
         return {
            ...state,
            todos: [...action.payload],
         }
      case FETCH_TODO_FAIL:
         return {
            ...state,
            error: "Unabled to data fetch !"
         }
      default:
         return state
   }
}