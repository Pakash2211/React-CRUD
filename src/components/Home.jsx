import { useSelector,useDispatch } from "react-redux"
import{Navigate, useNavigate} from 'react-router-dom'
import React from 'react';
import { fetchdata,handleDelete } from "../Redux/fetchdata/action";

export const Home = () =>{
const dispatch = useDispatch()
const auth = useSelector((res)=> res);
const navigate  = useNavigate();
React.useEffect(()=>{
    dispatch(fetchdata())
 },[])

const{login,data} = auth;
console.log(data.data);
  
if(login.login === false){
    return (<Navigate to ='/login' /> )
}

const handleMore = (id) =>{
    navigate(`/product/${id}`);
}


    return(
        <>
   <button className="btn" onClick={()=>{
    return navigate('/product/create');
   }}>Create Product</button>
     { data.isLoading ? (<h1>Loading...</h1>) : data.isError ? (<h1>ERROR</h1>) :(
        <div className="produts">
       {
        data.data.map((res)=>{
          return (
            <div className="product">
          <img src ={res.image} />
          <h2>{res.title}</h2>
          <h3>brand:{res.brand}</h3>
          <h3>category:{res.category}</h3>
          <p>price: {res.price}</p>
          <div className="btngroup">
          <button onClick={()=>{
            return navigate(`/product/${res.id}/edit`)
          }}>
            Edit
          
          </button>

          <button onClick={()=>{
           dispatch(handleDelete(res.id));
          }}>Delete</button>

          <button onClick={()=>{handleMore(res.id)}}>View</button>
          </div>
          </div>
          ) 
        })
       }
       </div>
      )
}
       </>
    )
}