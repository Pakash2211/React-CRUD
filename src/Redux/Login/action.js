import { LOGIN_AUTH, LOGOUT_AUTH} from "./actionType";

export const loginAuth = () =>{
    return {
        type:LOGIN_AUTH
    }
}

export const logoutAuth = () =>{
    return{
        type:LOGOUT_AUTH
    }
}