import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const NextCard = ()=>{
    const [movieDetails, setMovieDetails] = useState()
    const movieId = useParams()
   console.log(movieId.movieid)
   const id = movieId.movieid
    const nextData = (id)=> {fetch (`https://www.omdbapi.com/?apikey=c24c2c7d&i=${id}`)
    .then(res=> res.json())
    .then(data => {  
      setMovieDetails(data)
      console.log(data)
    })};

    nextData(id)
    if (!movieDetails){
        nextData()
        return(
            <h2>loading</h2>
        )
    }
    else{
    return(
        <>
        <div className="aboutMovies">
                <div>
                <img src={movieDetails.Poster} alt="" />
                </div>
                <div>
                <h1 className="movieTitle">{movieDetails.Title}</h1>
                <p>{movieDetails.Plot}</p>
                <h4>{movieDetails.Year}</h4>
                <Link to="/" className="back">Back to Movie</Link>
                </div>
        </div>
        </>
    )}
}

export default NextCard;