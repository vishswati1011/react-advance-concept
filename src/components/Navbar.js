import React,{useEffect, useRef} from 'react';
import Tooltip from '../model/tooltip';
import styles from './Navbar.module.css'

function Navbar() {
    const menuRef = useRef(null);
    const toggleMenu = (event) =>{
        var menu = document.querySelector(`.${styles.nav_list}`)
        if(menu){
            menu.classList.toggle(`${styles.active}`)
        }
    }
    const handleClickOutside = (event) =>{
      var menu = document.querySelector(`.${styles.nav_list}`)
      if(menu){
          menu.classList.remove(`${styles.active}`)
      }
    }

    // const toggleMenu = (event) => {
    //   const menu = menuRef.current; // Get the DOM element reference
  
    //   if (menu) {
    //     menu.classList.toggle(`${styles.active}`); // Toggle active class
    //   }
    // };
  
    // const handleClickOutside = (event) => {
    //   if (menuRef.current && !menuRef.current.contains(event.target)) {
    //     menuRef.current.classList.remove(`${styles.active}`); // Close menu
    //   }
    // };
    useEffect(()=>{
      document.addEventListener("mousedown",handleClickOutside)
      return() =>{
        document.addEventListener("mousedown",handleClickOutside)
      }
    },[])
    
  return (
    <nav className={styles.header}>
      <h1>Navbar</h1>
      <div className={styles.menu} ref={menuRef}>
        <span onClick={(e)=>toggleMenu(e)} > Menu</span>
        <ul className={styles.nav_list}>
          <li> About Us</li>
          <li>Content</li>
            <Tooltip content="les't do it...">
              <li>Login</li>
            </Tooltip>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;