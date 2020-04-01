import {addMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import withRegisterRedirect from "../../HOC/app-hoc";


const mapStateToProps = (state) => {
    return {
        peopleData: state.dialogsPage.peopleData,
        messagesData: state.dialogsPage.messagesData,
        typedMessage: state.dialogsPage.typedMessage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendNewMessage: (message) => {
            let action = addMessageAC(message);
            dispatch(action);
        },
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRegisterRedirect)
(Dialogs);


