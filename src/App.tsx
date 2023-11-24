import React from "react"
import { Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Pages/HomePage"
import RootLayout from "@Layouts/RootLayout"
import { ROUTE_PATH } from "@Configure/constant"
import SinglePage from "@Pages/SinglePage"
import SingleTypePage from "@Pages/SingleTypePage"



const App = () => {
  return (
    <>
    <ToastContainer />
      <RootLayout>
          <Routes>
            <Route path={`${ROUTE_PATH.HOME}`} element={<Home />} />
            <Route path={`${ROUTE_PATH.SINGLE_PAGE}`} element={<SinglePage />} />
            <Route path={`${ROUTE_PATH.SINGLE_TYPE_PAGE}`} element={<SingleTypePage />} />
          </Routes>
      </RootLayout>
    </>
  )
}

export default App
