import { useState } from "react"
import axios from "axios"
import "./Movies.css"

function MoviesList1(){
    const [superMovies ,setSupermovies]=useState([]);
     const yourname=localStorage.getItem("name")

       async function iamHandling(){
        try{
            const  totaldata= await axios.get("https://www.apirequest.in/movie/api")
            setSupermovies((totaldata.data))
        }
         catch(error){
            console.error("its error plz give correct data",error)
            
        }

    }
    return(
        <div>
        <div className="heading-section">
        <h1>  My Movies List</h1>
        </div>
        <button  className= "mybutton"onClick={iamHandling}> My Movies Button</button>
        <div className="body">
           
           {superMovies.map((movies, index)=>{
            return(
               <div  key={movies.index} className="total">
                <div   className="head"> 
                 
                <div className="movies-card">
                  <h1>{movies.title}</h1>
                    {movies.year}<br></br>
                    {movies.rated}
                    {movies.released}<br></br>
                    {movies.runtime}
                    {yourname}
                   </div> 
                   </div>
                   </div>
            )
           })}
           </div>

        </div>
    )
}

    
export default MoviesList1