import React from 'react'
import Navbar from '../components/Navbar'
import { withLoading } from '../HOC/withLoading'
import styles from './Home.module.css';
import Counter from '../components/counter';
const Home = ({isLoading}) => {
  return (
    <div className={styles.home}>
      {isLoading ? <h3>Loading ....</h3>:
          <Counter/>
      }
    </div>
  )
}

export default withLoading(Home)
