import { useEffect, useState } from 'react'
import './App.scss'

import Home from '../src/pages/Home-page/Home'

import { Property } from './data/Property'
import { INITIAL_PROPERTY } from './data/data'

function App() {
  const [properties, setProperties] = useState<Property[]>([])

  useEffect(() => {
    setProperties(INITIAL_PROPERTY);
  }, [])

  return (
    <>
      <Home properties={properties} />
    </>
  )
}

export default App
