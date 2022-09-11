import { useParams,useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import {handlePost} from '../Redux/fetchdata/action'

export  const Productedit = () =>{
const{data} = useSelector((res)=>res.data);
const dispatch = useDispatch();
    const {id} = useParams();
   let data2= data.filter((res)=>{
        return res.id==id;
    })
 const navigate = useNavigate(); 
    const[show,setshow] = React.useState(data2[0]); 
       let{title,brand,price,category,image} = show;

const handleChange = (e) =>{
    let{name,value} = e.target;

    setshow({...show,[name]:value});
}



    return(
        <div className="productedit">
         <div>
         <div>TITLE :  </div>   
         <input type="text" value={title} onChange={handleChange} name="title"/>
         </div>

         <div>
         <div>BRAND :  </div>
         <input type="text" value={brand} onChange={handleChange} name="brand"/>
         </div>

         <div>
         <div>PRICE : </div>   
         <input type="number" value={price} onChange={handleChange} name="price"/>
         </div>

         <div>
         <div>CATEGORY : </div>   
         <input type="text" value={category} onChange={handleChange} name="category"/>
         </div>
          <div>
         <div>IMAGE URL : </div>   
         <input type="text" value={image} onChange={handleChange} name="image"/>
         </div>

         <button className="btn" onClick={()=>{
            return(
                dispatch(handlePost(show)),
                navigate('/')
            ) 
         }}>Submit</button>
        </div>
    )
}