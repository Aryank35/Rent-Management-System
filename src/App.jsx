import { useState } from 'react'

import './App.css'
import TenantDetailsForm from './Pages/TenantDetailsForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TenantDetailsForm/>
    </>
  )
}

export default App
