const ADD_MESSAGE = 'ADD-MESSAGE';

let initialStore = {
    peopleData: [
        {name: "Dmitry", id: 1},
        {name: "Nastya", id: 2},
        {name: "Vanya", id: 3},
        {name: "Kostia", id: 4}
    ],

    messagesData: [
        {id: 1, message: 'Hi? how are you?'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Hi'},
        {id: 4, message: 'Hello'},
        {id: 5, message: 'Yo'}
    ]
};

const dialogsReducer = (state = initialStore, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: state.messagesData.length,
                message: action.message
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                typedMessage: ''
            }
        }
        default:
            return state;
    }
};

export const addMessageAC = (message) => ({type: ADD_MESSAGE, message});

export default dialogsReducer;

