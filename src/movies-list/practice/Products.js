import { useState } from "react";
import axios from "axios";

function Products(){
    const [products, setProducts]=useState([])
     async function clickme(){
        const  result=await axios.post("https://api.escuelajs.co/api/v1/products/",{
            "title":" hello this is",
            "price": "4",
            "description": " woow chintu your doing  ",
            "categoryId": 1,
            "images": ["https://placeimg.com/640/480/any"]
          })
          setProducts(result.data.description)
          localStorage.setItem("name","hello")
    }
    
    return(
        <div>
            <h1> hii</h1>
            <button onClick={clickme}> ok click me  </button>
            {products}
        </div>
    )
}
export default Products