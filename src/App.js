import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Api from './components/Api';
import Distric from './components/Distric'
import Main from './components/Main'
import News from './components/News/News'
import Reso from './components/resources/Res'
class App extends Component {

 render() {
        return (
            <BrowserRouter>
                <Route exact path='/'>
                    <Main />
                </Route>
                   <Route path='/Distric'>
                    <Distric/>
                </Route>
                <Route path='/Api'>
                    <Api/>
                </Route>

                <Route path='/News'>
                    <News/>
                </Route>
                <Route path='/Reso'>
                    <Reso/>
                </Route>
            </BrowserRouter>
        )
    }
}

export default App;
