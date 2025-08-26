import React from 'react'
import "./App.css";
import axios from 'axios';
import { useEffect,useState } from 'react';
import SidebarLayout from "./layouts/SidebarLayout";
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Task from './components/Task';
import Goal from './components/Goal';
import Time from './components/Time';
import Calender from './components/Calender';


const App = () => {
  return (
    <Routes>
      <Route path='/' element= {<SidebarLayout/>}> 
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='tasks' element={<Task/>}/>
        <Route path='goals' element={<Goal/>}/>
        <Route path='time' element={<Time/>}/>
        <Route path='calender' element={<Calender/>}/>
      </Route>
    </Routes>
  )
}

export default App