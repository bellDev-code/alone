import { Route, Routes } from "react-router-dom"
import Home from "./Pages/HomePage"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
