import React,{useEffect, useRef} from 'react';
import Tooltip from '../model/tooltip';
import styles from './Navbar.module.css'
import { useDarkMode } from '../customHook/useDarkMode';

function Navbar() {
    const {isDarkMode,toggleDarkMode}= useDarkMode();
    const menuRef = useRef(null);
    const toggleMenu = (event) => {
      const menu = menuRef.current; // Get the DOM element reference
  
      if (menu) {
        menu.classList.toggle(`${styles.active}`); // Toggle active class
      }
    };
  
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        menuRef.current.classList.remove(`${styles.active}`); // Close menu
      }
    };
    useEffect(()=>{
      document.addEventListener("mousedown",handleClickOutside)
      return() =>{
        document.addEventListener("mousedown",handleClickOutside)
      }
    },[])
    
    return (
      <nav className={`${styles.header} ${isDarkMode ? styles.darkHeader : styles.lightHeader}`}>
        <h1>Navbar</h1>
        <div className={styles.menu}>
          <span onClick={(e)=>toggleMenu(e)} > Menu</span>
          <ul className={styles.nav_list} ref={menuRef}>
            <li> About Us</li>
            <li>Content</li>
              <Tooltip content="les't do it...">
                <li>Login</li>
              </Tooltip>
              <li><button onClick={()=>toggleDarkMode()}>{isDarkMode?'Use Light-mode' : 'Use Dark-mode'}</button></li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;