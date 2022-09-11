import * as types from "./actionType";
import axios from "axios";


const dataRequest = () =>{
   return {type:types.GET_REQUEST}
}

     
const dataSucess = (payload) =>{
  return {type:types.GET_SUCCESS,payload:payload}
}
const dataFailure = () =>{
  return {type:types.GET_FAILURE}
}

 export const fetchdata =() =>(dispatch) =>{
        dispatch(dataRequest());
        axios
          .get("http://localhost:3002/products")
          .then((res) => 
             dispatch(dataSucess(res.data))
          )
          .catch((err) => 
             dispatch(dataFailure())
          );

 }
export const handleDelete = (id) => (dispatch) =>{
   dispatch(dataRequest());
   axios.delete(`http://localhost:3002/products/${id}`).then(()=>  {
      dispatch(fetchdata())
   }
   ).catch(()=>{
      dispatch(dataFailure());
   })
}

export const handlePost = (obj) => (dispatch) =>{
   dispatch(dataRequest());
   axios
   .put(`http://localhost:3002/products/${obj.id}`, {
    ...obj
   }, {
       headers: { 'Content-type': 'application/json; charset=UTF-8' }
   })
   .then(() => dispatch(fetchdata()));
   
}

export const dataPost = (obj) => (dispatch)=>{
   dispatch(dataRequest());
   axios
   .post('http://localhost:3002/products', obj)
   .then(() => dispatch(fetchdata()))
}