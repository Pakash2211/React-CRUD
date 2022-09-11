import { LOGIN_AUTH,LOGOUT_AUTH } from "./actionType";

const init = {
    login:false
}

export const  loginReducer =  (state=init,action) =>{

    switch(action.type){
        case LOGIN_AUTH : {
            return {
                ...state,login:true
            }
        }
        case LOGOUT_AUTH:{
            return{
                ...state,login:false
            }
        }
        default : {
            return state;
        }
    }
}