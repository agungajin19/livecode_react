import React from 'react'
import {Route, Switch} from "react-router-dom"
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'unistore/react'

import Home from '../pages/Home'
import Signin from '../pages/Signin'
import Profile from '../pages/Profile'
import Category from '../pages/Category'
import NotMatch from '../pages/NotMatch'
import { store } from '../store'

const MainRoute = () => {
    return(
        <Provider store = {store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/signin' component={Signin}/>
                    <Route exact path='/profile' component={Profile}/>
                    <Route path='/:category' component={Category}/>
                    <Route component = {NotMatch}/>
                </Switch>
            </BrowserRouter>
        </Provider>

    )
}

export default MainRoute