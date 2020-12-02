import React from 'react'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import Main from './Main'
import AuthProvider from './AuthProvider'

const App = () => (
    <AuthProvider>
        <Header />
        <Main />
        <Footer />
    </AuthProvider>
)

export default App
