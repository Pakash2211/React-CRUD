import React from 'react';
import {loginAuth} from '../Redux/Login/action'
import { useDispatch,useSelector} from 'react-redux';
import { Navigate } from 'react-router-dom';



export const Login = () =>{
const[data,setData] = React.useState({
    email: "",
    first_name : "",
    last_name : ""
})
let {email,first_name,last_name} = data;
const dispatch = useDispatch();
const handleChange =(e) =>{
 let {name,value} = e.target;
   setData({...data,[name]:value})
}
const [response,setResponse] = React.useState(0);
   const x = useSelector((res)=>res.login.login);
   console.log(x);
   const clickHandle = () =>{
    let url = "https://reqres.in/api/login"
    fetch(url,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then((res) => setResponse(res.status))
 
   
    
}

if(response==400){
    dispatch(loginAuth());
}
if(x===true){
    return(
        <Navigate to="/"/>
    )
    
}

    return(
        <div>
            <input type="text"  placeholder="enter email" required style={{border:"2px solid black", padding:"2px"}} value={email} name="email" onChange={handleChange}/>
             <br/>
             <br/>
             <input type="text"  placeholder="first name" required style={{border:"2px solid black", padding:"2px"}} value={first_name} name="first_name"onChange={handleChange}/>
             <br/>
             <br/>
             <input type="text"  placeholder="last name" required style={{border:"2px solid black", padding:"2px"}} value={last_name} name="last_name"onChange={handleChange}/>
             <br/>
             <br/>
             <button className='btn' onClick={clickHandle}>Login</button>
        </div>
    )
}