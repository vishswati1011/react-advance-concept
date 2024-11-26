import React from 'react'
import Home from '../Pages/Home';
import { Route,Routes } from 'react-router-dom';
import styles from './AuthRoutes.module.css';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
const AuthRoutes = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.main}>
      <div className={styles.sidebar}>
        <Sidebar/>
      </div>
      <div className={styles.content}>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
    </Routes>
      </div>
      </div>
     
    </div>
    
  )
}

export default AuthRoutes
