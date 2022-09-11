import { loginReducer } from "./Login/reducer";
import { dataReducer } from "./fetchdata/reducer";
import{legacy_createStore as createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from "redux-thunk";

const allreducer = combineReducers({
    login:loginReducer,
    data:dataReducer,
})

const addthunk = applyMiddleware(thunk);

 export const store = createStore(allreducer,addthunk);