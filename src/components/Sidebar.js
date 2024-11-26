import React from 'react'
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.menu}>
        <li>Dashboard</li>
        <li>User</li>
        <li>Couter</li>
        <li>Setting</li>
        <li>Mobile</li>
      </ul>
    </div>
  )
}

export default Sidebar
