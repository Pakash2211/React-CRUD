import * as types  from "./actionType";


const initialState = {
    isError:false,
    isLoading:false,
    data:[]
}
const dataReducer=(oldstate = initialState,action)=>{

switch(action.type){
    case types.GET_REQUEST :{
        return{
            ...oldstate,isLoading:true
        }
    }

    case types.GET_SUCCESS :{
        return{
            ...oldstate,isLoading:false,data : action.payload
        }
    }

    case types.GET_FAILURE :{
        return{
            ...oldstate,isError:true
        }
    }
   
          
    default :{
        return initialState;
    }
}

}


export{dataReducer};