import React from 'react'
import Home from './pages/home/Home'
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import MyList from './pages/myList/MyList';
import Search from './pages/search/Search';
import Watch from './pages/watch/Watch';
import Details from './components/details/Details';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element= {<Home/>}></Route>
        <Route path="/movies" element= {<Home type="movies"/>}></Route>
        <Route path="/series" element= {<Home type="series"/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/mylist' element={<MyList/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/watch' element={<Watch/>}></Route>
        <Route path='/details' element={<Details/>}></Route>
      </Routes>
    </>
  )
}

export default App