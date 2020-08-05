import React from 'react';
import Routes from 'routes'
import {BrowserRouter as Router} from "react-router-dom";
import TopBar from 'components/topBar'
import {ModalProvider} from 'contexts/modalContext'
import BottomBar from 'components/bottomBar'
import {YMaps} from "react-yandex-maps";

function App() {
    return (
        <div className="App">
            <YMaps
                query={{apikey: 'e2345445-15e9-432b-8037-6107be685564'}}
            >
                <Router>
                    <ModalProvider>
                        <TopBar/>
                        <Routes/>

                    </ModalProvider>
                </Router>
                <BottomBar/>
            </YMaps>
        </div>
    );
}

export default App;
