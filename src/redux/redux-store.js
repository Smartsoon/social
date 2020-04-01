import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import friendsReducer from "./friends-reducer";
import headerReducer from "./header-reducer";
import appReducer from "./app-reducer";
import {compose} from "redux";
import {reducer as formReducer} from "redux-form";


let reducersStack = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    friendsPage: friendsReducer,
    auth: headerReducer,
    form: formReducer,
    application: appReducer
});




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducersStack, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;

