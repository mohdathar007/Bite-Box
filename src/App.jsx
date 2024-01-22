import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme } from './theme/DarkTheme'
import HomePage from './customer/pages/HomePage/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline/>
    <HomePage/>
    </ThemeProvider>
  )
}

export default App
