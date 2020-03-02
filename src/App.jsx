import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Logout from './components/Logout';

import HomePage from './HomePage';
import TreesPage from './TreesPage';
import AboutPage from './AboutPage';
import { loggedInOnly } from './utils';

export default class App extends React.Component {
    render() {
        return (
            <main>
                <Header />
                <content className="root">
                    <div className="main" id="main">
                    <div><Content /></div>
                        <Switch>
                            <Route path="/" exact component={HomePage} />
                            <Route path="/trees" exact component={TreesPage} />
                            <Route path="/about" exact component={loggedInOnly(AboutPage)} />
                            <Route path="/login" exact component={Login} />
                            <Route path="/logout" exact component={Logout} />
                        </Switch>
                    </div>
                </content>
                <Footer />
            </main>
        );
    }
}
