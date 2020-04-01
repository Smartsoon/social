import styles from "./user-status.module.css";
import React from "react";


class UserStatus extends React.Component {
    state = {
        statusEdit: false,
        status: this.props.statusText
    };
    setStatusModeEdit = () => {
        if (this.props.id === this.props.userId) {
        this.setState({
            statusEdit: true
        })}
    };

    setStatusModeApprove = () => {
        this.setState({
            statusEdit: false
        });
        this.props.setUserStatus(this.state.status)
        };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })}
    }

    render() {

        return (
            <div className={styles.userInfo_status_wrapper}>
                {
                    !this.state.statusEdit ?
                        <div>
                            <span onDoubleClick={this.setStatusModeEdit}
                                  className={styles.userInfo_status}>{!this.props.statusText ? "Статус отсутствует" : `"${this.props.statusText}"`}</span>
                        </div> :
                        <div>
                            <input onChange={this.onStatusChange} value={this.state.status} autoFocus={true} onBlur={this.setStatusModeApprove} type="text"/>
                        </div>
                }
            </div>
        )
    }
}

export default UserStatus;