import React from "react";
import QuizApp from "./components/QuizApp/QuizApp.jsx";
// eslint-disable-next-line no-unused-vars
import Start from "./pages/start/start.jsx";
import Final from "./pages/final/final.jsx"
import './App.sass'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
        <Routes>
            <Route path = '/' element = {<Start/>}/>
            <Route path = '/quiz' element = {<QuizApp/>}/>
            <Route path = '/final' element = {<Final/>}/>
        </Routes>
    </>
  )
}
//https://layout-project-theta.vercel.app/ - deploy
export default App
