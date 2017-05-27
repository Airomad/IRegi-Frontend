import React from 'react'
import ReactDOM from 'react-dom'
import ApiService from './Api.js'

'use strict'

class User {
    constructor(name, sessionKey) {
        Object.defineProperty(this, "name", { value: name });
        Object.defineProperty(this, "sessionKey", { value: sessionKey });
    }
}

class System {
    constructor() {
        this.user = null

        Object.defineProperty(this, "getApiService", { value: new ApiService(this) });
        Object.defineProperty(this, "API_SERVER_URL", { value: "http://iregi-backend/app/api/" });
    }

    setUser(name, sessionKey) {
        this.user = new User(name, sessionKey)
    }

    setHeaderComponent(component) {
        this.headerComponent = component
    }

    setBodyComponent(component) {
        this.bodyComponent = component
    }

    getHeaderComponent() {
        return this.headerComponent
    }

    getBodyComponent() {
        return this.bodyComponent
    }

    getUser() {
        return this.user
    }

    destroyUser() {
        delete this.user
    }

    isUserExists() {
        return this.user !== null
    }

    getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    setCookie(name, value, seconds = 7) {
        let date = new Date(new Date().getTime() + seconds * 1000);
        value = encodeURIComponent(value);
        document.cookie = name + "=" + value + "; path=/; expires=" + date.toUTCString();
    }
}

var system = new System()

export default system;
