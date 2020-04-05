import {authTC} from "./header-reducer";

const SET_INITIALIZATION_STATUS = "SET-INITIALIZATION-STATUS";

let InitialStore = {
    initialize: false
};

const appReducer = (state = InitialStore, action) => {
    switch (action.type) {
        case SET_INITIALIZATION_STATUS:
            return {
                ...state,
                initialize: true
            };
        default:
            return state;
    }
};

export const initializeApp = () => {
    return (dispatch) => {
        const auth = dispatch(authTC());
        Promise.all([auth]).then(() => {
            dispatch(setInitializationStatus());
        });
    }};

export const setInitializationStatus = () => ({type: SET_INITIALIZATION_STATUS});

export default appReducer;