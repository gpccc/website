import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore, { history } from  './store/configureStore';

import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route }  from 'react-router-dom';

import HomePage from './components/home-page';
import StaffPage from './components/staff-page';

import './i18n';

import './styles/site.css';

const initialState = {};
const store = configureStore(initialState);

function App() {
    return (
        <React.StrictMode>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/staff">
                        <StaffPage />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </ConnectedRouter>
        </Provider>
        </React.StrictMode>
    );
}

ReactDOM.render(<App />, document.querySelector("#app"));