import React from 'react'
import { hydrate } from 'react-dom'
import Main from '../shared/components/Main'

hydrate(<Main data={window.__INITIAL_DATA__} />,document.getElementById('root'))