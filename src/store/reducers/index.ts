import { combineReducers } from "redux";
import bookReducer from "./book";
import signUpReducer from "./auth";
import authReducer from "./auth";


export const rootReducer = combineReducers({
    book: bookReducer,
    auth: authReducer,
    signUp: signUpReducer
});


export type RootState = ReturnType<typeof rootReducer>
