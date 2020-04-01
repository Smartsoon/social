// import dialogsReducer from './dialogs-reducer'
// import wallPageReducer from './wall-page-reducer'
//
//
// let store = {
//     reRenderThree() {
//     },
//
//     _state: {
//
//         wallPage: {
//             postsData: [
//                 {id: 1, post: 'Hello', likes: 20},
//                 {id: 2, post: 'Hey, how are you, man?', likes: 34},
//                 {id: 3, post: 'Yo, bro', likes: 3},
//                 {id: 4, post: 'Gratz', likes: 5},
//                 {id: 5, post: 'Gratz', likes: 5},
//             ],
//             typedText: '',
//         },
//
//         dialogsPage: {
//             peopleData: [
//                 {name: "Dmitry", id: 1},
//                 {name: "Nastya", id: 2},
//                 {name: "Vanya", id: 3},
//                 {name: "Kostia", id: 4}
//             ],
//
//             messagesData: [
//                 {id: 1, message: 'Hi? how are you? Do you know what to blablablablablalba'},
//                 {id: 2, message: 'Yo'},
//                 {id: 3, message: 'Hi'},
//                 {id: 4, message: 'Hello'},
//                 {id: 5, message: 'Yo'}
//             ],
//             typedMessage: '',
//         }
//
//     },
//
//     getState() {
//         return this._state
//     },
//
//
//     dispatch(action) {
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.wallPage = wallPageReducer(this._state.wallPage, action);
//         this.reRenderThree();
//     },
//
//     subscribe(observer) {
//         this.reRenderThree = observer;
//     },
//
// };
//
// export default store;