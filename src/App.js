import React, {Component} from 'react';
import {Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import './App.css';
import NavigationMenu from "./blocks/Navmenu/navmenu.jsx";
import Footer from "./blocks/Footer/footer.jsx";
import Settings from "./blocks/Settings/settings";
import ProfileContainer from "./blocks/Profile/profile-container";
import DialogsContainer from "./blocks/Dialogs/dialogs-container";
import FriendsContainer from "./blocks/Friends/friends-container";
import HeaderContainer from "./blocks/Header/header-container";
import RegistersContainer from "./blocks/Register/register-container";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./blocks/common/Preloader/preloader";

// import Audio from "./blocks/Audio/audio";

const Audio = React.lazy(() => import('./blocks/Audio/audio'));


class App extends Component {

    componentDidMount() {
        this.props.initializeApp();

    }

    render() {

        {
            if (!this.props.initialize) return <Preloader/>;
        }

        return (
            <div className="App">
                <HeaderContainer/>
                <NavigationMenu/>
                <div className={'content'}>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/messages" render={() => <DialogsContainer/>}/>
                    <Route path="/friends" render={() => <FriendsContainer/>}/>
                    <Route path="/music" render={() => {
                        return (
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <Audio/>
                            </React.Suspense>)
                    }}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/register" render={() => <RegistersContainer/>}/>

                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {initialize: state.application.initialize}
);

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App);


