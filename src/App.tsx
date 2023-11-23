import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/HomePage"
import RootLayout from "@Layouts/RootLayout"

const App = () => {
  return (
    <>
      <RootLayout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </RootLayout>
    </>
  )
}

export default App
