import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from '../pages/auth/SignUp'
import SignIn from '../pages/auth/SignIn';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<SignUp/>} />
          <Route path='/login' element={<SignIn/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router