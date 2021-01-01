import { Todo } from "./Todo";

export const FETCH_TODO_REQ = "FETCH_TODO_REQ";
export const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS";
export const FETCH_TODO_FAIL = "FETCH_TODO_FAIL";

interface TodoAsync {
   payload?: Todo[] | null,
};

interface FetchTodosReq extends TodoAsync {
   type: typeof FETCH_TODO_REQ,
}
interface FetchTodosSunccess extends TodoAsync {
   type: typeof FETCH_TODO_SUCCESS,
}
interface FetchTodosFail extends TodoAsync {
   type: typeof FETCH_TODO_FAIL,
}

export type TodoActionTypes = FetchTodosReq | FetchTodosSunccess | FetchTodosFail;