import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk";
import { todoreducer } from "./todo/TodoReducer";


export const RootReducer = combineReducers({ todo: todoreducer })

export type AppState = ReturnType<typeof RootReducer>;

export const store = createStore(
   RootReducer,
   applyMiddleware(thunk)
)