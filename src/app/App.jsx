import React from 'react'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import Main from './Main'
import AppStore from './AppStore'

const App = () => (
    <AppStore>
        <Header />
        <Main />
        <Footer />
    </AppStore>
)

export default App
