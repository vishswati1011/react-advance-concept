# context in React

## Step to Create a AuthContext

1. create a file authContext.js

###
import { createContext, useCallback, useState, useEffect, useMemo } from "react";

const initialState = {
  isAuthenticate: false,
  setToken: () => {},
};

const AuthContext = createContext(initialState);

const AuthProvider = ({ children }) => {
  const [isAuthenticate, setIsAuthenticate] = useState('');

  const setToken = useCallback((token) => {
    localStorage.setItem("token", token);
    setIsAuthenticate(true);
}, []);

  useEffect(() => {~
    const token = localStorage.getItem("token");
    if (token === 'logged-in') {
      setIsAuthenticate(true);
    }
  }, [isAuthenticate]);

  const value = useMemo(()=>({isAuthenticate,setToken}),[isAuthenticate,setToken])


  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

###

##  2. import authcontext in app.js

###

import { BrowserRouter as Router} from 'react-router-dom';
import AuthRoutes from './Routes/AuthRoutes.js';
import UnAuthRoutes from './Routes/UnAuthRoutes.js';
import { AuthContext} from './context/authContext.js';
import { useContext } from 'react';

function App() {

  const {isAuthenticate} = useContext(AuthContext)
  return (
    <Router>
        {isAuthenticate ? <AuthRoutes/>:<UnAuthRoutes/>}
    </Router>
  );
}

export default App;

### 

# 3. import AuthContent in Login to access setToken method

###
  const { setToken } = useContext(AuthContext);

  const handleClick = () => {
    setToken("logged-in");
  };

###

# 4. import AuthProvider in index.js

###

  root.render(
  <AuthProvider>
      <App />
  </AuthProvider>
  );

###


# create a HOC component for loading 

## HOC/withLoading.js

###

import React, { useEffect, useState } from "react";
export const WithLoading = (WrappedComponent) => {
const WithLoading = ({ props }) => {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return <WrappedComponent isLoading={isLoading} {...props} />;
};
WithLoading.displayName = `withLoading(${
  WrappedComponent.displayName || WrappedComponent.name
})`;

return WithLoading;
};

### 
## use HOC

###
import React from 'react'
import Navbar from '../components/Navbar'
import { withLoading } from '../HOC/withLoading'
const Home = ({isLoading}) => {
return (
  <div>
    <Navbar />
          {isLoading ? <h3>Loading ....</h3>:
          <p> Home Component </p>
          }
  </div>
)
}

export default withLoading(Home)

###

# Create a Tooltip use React Portal

## 1. First we create a tooltip modal

###

import React, { useRef, useState } from 'react';

function Tooltip({ children ,content}) {
const [isTooltipVisible, setIsTooltipVisible] = useState(false);
const tooltipRef = useRef(null);

const handleMouseEnter = () => {
  setIsTooltipVisible(true);
};

const handleMouseLeave = () => {
  setIsTooltipVisible(false);
};

return (
  <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
    {children}
    {isTooltipVisible && (
      <div ref={tooltipRef} className="tooltip">
        <button className='tooltip_button'>{content}</button>
      </div>
    )}
  </div>
);
}

export default Tooltip;

###

## tooltip css  file name Tooltip.css

###

.tooltip {
  position: absolute;
  max-width:350px;
  z-index: 1000; /* Ensure tooltip is above the li element */
}
.tooltip_button {
  background-color: rgb(9, 152, 165);
  color:white;
  border: none;
  border-radius: 5px;
  padding: 5px;
}

###

## now we use Tooltip model


###
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

###





