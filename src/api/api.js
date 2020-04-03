import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "9921c173-a169-4d6d-a3a1-e8d133cc95a5"},
});

export const authAPI = {
    getAuth() {
        return (
            instance.get(`auth/me`)
                .then(response => response.data)
        )
    },

    doLogin(email, password, rememberMe = false) {
        return (
            instance.post(`auth/login`, {email, password, rememberMe})
        )
    },

    doLogout() {
        return (
            instance.delete(`auth/login`)
        )
    }
};

export const profileAPI = {
    getUserProfile(userId) {
        return (
            instance.get(`profile/${userId}`)
                .then(response => response.data)
        )
    },

    getUserStatus(userId) {
        return (
            instance.get(`profile/status/${userId}`)
        )
    },

    setUserStatus(status) {
        return (
            instance.put(`profile/status/`, {status: status})
        )
    },

    updateAvatar(file) {
        const formData = new FormData();
        formData.append("image", file);
        return instance.put(`profile/photo/`, formData, {
            headers: { "Content-Type": "multipart/form-data" }
        })
    }
};

const friendsAPI = {

    getUsers(selectedPage, pageSize) {
        return (
            instance.get(`users?page=${selectedPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    },

    doFollow(id) {
        return (
            instance.post(`follow/${id}`)
        )
    },

    doUnfollow(id) {
        return (
            instance.delete(`follow/${id}`)
        );
    }


};

export default friendsAPI;
