import { useParams,useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";


export const  Productinv = () =>{
    const data = useSelector((res)=>res.data.data)
  let {id }= useParams();
  const navigate = useNavigate();
   const res2 = data.filter((res)=>{
    return res.id == id;
   })

    const goBack = () =>{
        return(
            navigate('/')
        )
    }


    return(
        <>

        <div className="productinv">
        <img src ={res2[0].image} />
        <h2>{res2[0].title}</h2>
        <h3>brand:{res2[0].brand}</h3>
        <h3>category:{res2[0].category}</h3>
        <p>price: {res2[0].price}</p>
        <button onClick={goBack} >Go back</button>
        </div>
           
        
        </>
    )
}