import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CurrentUserProvider} from 'contexts/currentUser'
import CurrentUserChecker from 'components/currentUserChecker'

ReactDOM.render(
    <React.StrictMode>
        <CurrentUserProvider>
            <CurrentUserChecker>
                <App/>
            </CurrentUserChecker>
        </CurrentUserProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

