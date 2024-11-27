
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