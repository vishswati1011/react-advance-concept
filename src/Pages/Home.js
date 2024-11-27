import React, { useReducer } from "react";
import { withLoading } from "../HOC/withLoading";
import useErrorBoundary from "../customHook/useErrorBoundary";
import styles from "./Home.module.css";
import Counter from "../components/counter";
import useWindowScrollPositions from "../customHook/useWindowScrollPositions";
import { initialState, reducer } from "../model/WidthReducer";
import DisplayValue from '../components/DisplayValue';
import useCopyToClipboard from "../customHook/useCopyToClipboard";

const Home = ({ isLoading }) => {
  const { scrollX, scrollY } = useWindowScrollPositions();
  const hasError = useErrorBoundary();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isCopied,copy]= useCopyToClipboard();
  return (
    <div className={styles.home}>
      {isLoading ? (
        <h3>Loading ....</h3>
      ) : (
        <div>
          {hasError ? <h1>Something went wrong with counter </h1> : <Counter />}
          <br />
          <div>
            <span>Current position X-axis: {scrollX}</span>
            <span>Current position Y-axis: {scrollY}</span>
          </div>
          <br />
          <div style={{display:'flex', gap:10}}>
            <div style={{ width: `${state.width}px` , border:'1px solid black', 
              textAlign:'center'}}> Box width</div>
            <button onClick={()=>{dispatch({type:'plus'})}}>Plus</button>
            <button onClick={()=>{dispatch({type:'minus'})}}>Minus</button>
           
          </div>
          <h3>
              Make a delay in search box
            <DisplayValue/>
          </h3>

          <button onClick={()=>copy()}>{isCopied? "copied" :"copy"}</button>
        </div>
      )}
    </div>
  );
};

export default withLoading(Home);
