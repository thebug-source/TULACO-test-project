import React from 'react'
import { Redirect } from 'react-router-dom';
import { store } from '../store';

export function loggedInOnly(Component) {
    return class extends React.Component {
        render() {
            //const state = store.getState();

            if (sessionStorage.getItem('userID')) {
                return <Component {...this.props} />
            }
            return <Redirect to="/login" />
        }
    }
}