import React,{useRef} from 'react';
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
  return (
    <nav className={styles.header}>
      <h1>Navbar</h1>
      <div className={styles.menu}>
        <span onClick={(e)=>toggleMenu(e)} ref={menuRef}> Menu</span>
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