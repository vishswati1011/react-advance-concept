import React from 'react'
import Navbar from '../components/Navbar'
import { withLoading } from '../HOC/withLoading'
import styles from './Home.module.css';
const Home = ({isLoading}) => {
  return (
    <div className={styles.home}>
      {isLoading ? <h3>Loading ....</h3>:
           <p> Home Component </p>
      }
    </div>
  )
}

export default withLoading(Home)
