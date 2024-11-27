import React from 'react'
import styles from './Sidebar.module.css';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../customHook/useDarkMode';
function Sidebar() {
  const {isDarkMode}= useDarkMode();

  return (
    <div className={`${styles.sidebar} ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
      <ul className={styles.menu}>
        <Link className={`${styles.link_style} ${isDarkMode ? styles.lightText : styles.darkText}`} to='/dashboard'> <li>Dashboard</li></Link>
        <Link className={`${styles.link_style} ${isDarkMode ? styles.lightText : styles.darkText}`} to='user'> <li>User</li></Link>
        <Link className={`${styles.link_style} ${isDarkMode ? styles.lightText : styles.darkText}`} to='/counter'> <li>Couter</li></Link>
        <Link className={`${styles.link_style} ${isDarkMode ? styles.lightText : styles.darkText}`} to='setting'> <li>Setting</li></Link>
        <Link className={`${styles.link_style} ${isDarkMode ? styles.lightText : styles.darkText}`} to='/useWindowScrollHook'><li>Get Current Position</li></Link>
      </ul>
    </div>
  )
}

export default Sidebar
