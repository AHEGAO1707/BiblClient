import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "../reducers";


let enhancer= applyMiddleware(thunk)

if (process.env.NODE_ENV !== "production") {
    const composeEnhancers =
        // @ts-ignore
        typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    enhancer = composeEnhancers(enhancer);
}


// const _localStorage: any = localStorage.getItem('reduxState')

// const persistedState = localStorage.getItem('reduxState') ? JSON.parse(_localStorage) : {}



export const store = createStore(
    rootReducer,
    enhancer
)
