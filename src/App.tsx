import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/HomePage"
import RootLayout from "@Layouts/RootLayout"
import { ROUTE_PATH } from "@Configure/constant"
import SinglePage from "@Pages/SinglePage"


const App = () => {
  return (
    <>
      <RootLayout>
          <Routes>
            <Route path={`${ROUTE_PATH.HOME}`} element={<Home />} />
            <Route path={`${ROUTE_PATH.SINGLE_PAGE}`} element={<SinglePage />} />
          </Routes>
      </RootLayout>
    </>
  )
}

export default App
