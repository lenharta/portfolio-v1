import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Layout, Social, Nav, Loader, Email } from './components'
import { Footer } from './sections'
import { GlobalStyle, theme } from './styles'

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 5900)
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        { isLoading ? (
          <Loader />
        ) : (
          <div className="bg__gradient">
            <Nav />
            <Layout />
            <Social />
            <Footer />
          </div>
        )}

      </ThemeProvider>
    </>
  )
}



export default App

// IDEAS
// Most used tech (cursor physics) logo section
// animated loading screen
// Custom Twitter API section
// Custom GitHub API section
// Custom 404 page
