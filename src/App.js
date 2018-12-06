// Modules
import React, { Component } from 'react'
import { Provider } from 'react-redux'

// Project
import Routes from '@/routes'
import store from '@/store'

class App extends Component {
    render(){
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        )
    }
}

export default App