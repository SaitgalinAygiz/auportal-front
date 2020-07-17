import React from 'react';
import Routes from 'routes'
import {BrowserRouter as Router} from "react-router-dom";
import TopBar from 'components/topBar'
import { ModalProvider } from 'contexts/modalContext'
import BottomBar from 'components/bottomBar'

function App() {
    return (
        <div className="App">
            <Router>
                <ModalProvider>
                    <TopBar/>

                </ModalProvider>
                <Routes/>
            </Router>
            <BottomBar/>
        </div>
    );
}

export default App;
