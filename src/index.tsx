// DO NOT CHANGE THIS FILE //

import React from 'react'
import {createRoot} from "react-dom/client"

import './index.css'
import './planets.css'
import Main from './components/Main'


// const container = document.getElementById('app')
createRoot(document.getElementById('app')! as HTMLElement).render(<Main />)

// root.render(<Main />)

// ReactDOM.render(<Main />, document.getElementById('app'));