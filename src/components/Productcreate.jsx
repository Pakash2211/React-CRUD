import React from 'react';
import{useDispatch} from 'react-redux'
import{dataPost} from "../Redux/fetchdata/action"
import { useNavigate } from 'react-router-dom';

export const Productcreate = () =>{
    const[show,setShow] = React.useState({
        title: "",
        brand: "",
        price: "",
        category: "",
        image : ""
    });
let {title,brand,price,category,image} = show
   const handleChange = (e) =>{
    const{name,value} = e.target;
    setShow({...show,[name]:value})
   }

   const dispatch = useDispatch();
   const navigate = useNavigate();

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
            return dispatch(dataPost(show)),
            navigate('/')
        }}>Submit</button>
        </div>
    )
}