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

## 3. import AuthContent in Login to access setToken method

###
    const { setToken } = useContext(AuthContext);

    const handleClick = () => {
      setToken("logged-in");
    };

###

## 4. import AuthProvider in index.js

###

    root.render(
    <AuthProvider>
        <App />
    </AuthProvider>
    );

###


# create a HOC component for loading 

## 1. HOC/withLoading.js

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

## 2. use HOC

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

## 1.First we create a tooltip modal

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
    import React,{useEffect} from 'react';
    import Tooltip from '../model/tooltip';
    import styles from './Navbar.module.css'

    function Navbar() {
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
        useEffect(()=>{
          document.addEventListener("mousedown",handleClickOutside)
          return() =>{
            document.addEventListener("mousedown",handleClickOutside)
          }
        },[])
        
        return (
          <nav className={styles.header}>
            <h1>Navbar</h1>
            <div className={styles.menu}>
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

###

# Create a dropdown and toggle it using useRef

###
    import React,{useEffect, useRef} from 'react';
    import Tooltip from '../model/tooltip';
    import styles from './Navbar.module.css'

    function Navbar() {
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
          <nav className={styles.header}>
            <h1>Navbar</h1>
            <div className={styles.menu}>
              <span onClick={(e)=>toggleMenu(e)} > Menu</span>
              <ul className={styles.nav_list} ref={menuRef}>
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


#  CustomHook in react to get current position on Scroll

###
    import { useEffect, useState } from "react"

    const useWindowScrollPositions = () => {
        const [scroll,setScroll] = useState({
            scrollX:0,
            scrollY:0,
        })

        useEffect(()=>{
            window.addEventListener("scroll",updateScrollPosition)
        },[])
        const updateScrollPosition = () =>{
            setScroll({
                scrollX:window.screenX,
                scrollY:window.scrollY,
            })
        }

        return scroll;
    }
    export default useWindowScrollPositions;
###
## 2. use the custom hook
###  
    import React from 'react'
    import { withLoading } from '../HOC/withLoading'
    import useWindowScrollPositions from '../customHook/useWindowScrollPositions'
    const Home = ({isLoading}) => {
      const {scrollX,scrollY} = useWindowScrollPositions();
      return (
        <div className={styles.home}>
          {isLoading ? <h3>Loading ....</h3>:
            <div>
              Current position X-axis: {scrollX}
              Current position Y-axis: {scrollY}
            </div>
          }
        </div>
      )
    }

    export default withLoading(Home)

###

# Create a custom Error Boundary Hooks and use it

## 1. create custom hooks
###
    import  { useEffect, useState } from "react";

    const useErrorBoundary = () =>{
        const  [hasError,setHasError] = useState(false);
        useEffect(()=>{
            const handleError = (error,info) =>{
                setHasError(true);
                console.error(error,info)
            }
            window.addEventListener('error',handleError);
            return ()=>{
                window.removeEventListener('error',handleError)
            }
        },[]);

        return hasError

    }
    export default useErrorBoundary;
###

## 2. use hooks
###
    import React from 'react'
    import { withLoading } from '../HOC/withLoading'
    import useErrorBoundary from '../customHook/useErrorBoundary';
    import styles from './Home.module.css';
    import Counter from '../components/counter';
    const Home = ({isLoading}) => {
      const hasError = useErrorBoundary();
      return (
        <div className={styles.home}>
          {isLoading ? <h3>Loading ....</h3>:
            <div>
              {hasError ? <h1>Something went wrong with counter </h1> :<Counter/>}
            </div>
          }
        </div>
      )
    }

    export default withLoading(Home)

###

# create a reducer to increase width of model and use it 
## 1. First we create reducer 
###
    const initialState = {width:100}

    const reducer = (state,action) => {
        switch(action.type) {
            case 'plus': 
                return {width:state.width+15};
            case 'minus':
                return {width:state.width-10};
            default :
            throw new Error ("action type error")    
        }
    }
    export {reducer,initialState};
###

## 2. we use now created reducer to handle width of box

###

    import React, { useReducer } from "react";
    import styles from "./Home.module.css";
    import { initialState, reducer } from "../model/WidthReducer";
    const Home = ({ isLoading }) => {
      const [state, dispatch] = useReducer(reducer, initialState);
      return (
        <div style={{display:'flex', gap:10}}>
          <div 
              style={{ 
                width: `${state.width}px`, 
                border:'1px solid black', 
                textAlign:'center'
              }}> 
              Box width
          </div>
          <button onClick={()=>{dispatch({type:'plus'})}}>Plus</button>
          <button onClick={()=>{dispatch({type:'minus'})}}>Minus</button>
        </div>
      );
    };

    export default withLoading(Home);

###

# what is Debounce create a custom debounce hook

### 
    import { useEffect, useState } from "react"

    const useDebounce = (value,delay) =>{
        const [debouceValue,setDebounseValue] = useState();
        useEffect(()=>{
            const timeout = setTimeout(()=>{
                setDebounseValue(value)
            },delay)   
            return ()=>{
                clearTimeout(timeout);
            } 
        },[value])

        return debouceValue;
    }
    export default useDebounce;
###

## 2. use now useDebounceHooks
###
    import { useState } from "react"
    import useDebounce from "../customHook/useBounceHook";
    const DelayedValue = ()=>{
        const [value,setValue] = useState();
        const delayValue = useDebounce(value,2000)
        return (
            <div>
              
                <input 
                    value={value} 
                    placeholder="Try to search"
                    onChange={(e)=>setValue(e.target.value)}
                />
                <p>DelayValue of 2 sec : {delayValue}</p>
            </div>
        )

    }
    export default DelayedValue
### 

# create a custom hook to copy text to clipboard

## 1. create customHook
### 
    const { useState, useCallback } = require("react");
    function useCopyToClipboard (content) {
        const [isCopied,setIsCopied] = useState(false);

        const copy = useCallback(()=>{
            navigator.clipboard
            .writeText(content)
            .then(()=>setIsCopied(true))
            .then(()=>setTimeout(()=>
                setIsCopied(false),1250))
            .catch((error)=>alert(error));
        },[content])
        return [isCopied,copy]
    }
    export default useCopyToClipboard;

###

## 2. now use copy customHook

###

    import useCopyToClipboard from "../customHook/useCopyToClipboard";
    const [isCopied,copy]= useCopyToClipboard();
    <button onClick={()=>copy()}>{isCopied? "copied" :"copy"}</button>

###

# create a custom hook to change darkmode

### 
    import { useState } from "react"
    export const useDarkMode = () => {
        const [isDarkMode, setIsDarkMode]= useState(localStorage.getItem("isDarkMode")===true);

        const toggleDarkMode = () =>{
            setIsDarkMode((prevMode)=>{
                localStorage.setItem("isDarkMode",!prevMode)
                return !prevMode;
            })
        }
        return {isDarkMode,toggleDarkMode};
    }
###
## now use darkmode hook
###

    import { useDarkMode } from '../customHook/useDarkMode';
    const {isDarkMode,toggleDarkMode}= useDarkMode();

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

###
