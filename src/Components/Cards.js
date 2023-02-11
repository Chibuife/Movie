import { useState } from "react"
import { Link } from "react-router-dom"

const Card = ({cardData})=>{  
    // console.log(cardData)
    const [hover, isHover] = useState(false)
    const [currentIndex, isCurrentIndex] = useState() 

    if (!cardData){
        return(
            <h2>loading</h2>
        )
    }
    else{
    return(
        <div className="cardContainer">
            {cardData.map((item, index)=>{
               
                
                return(
                <div key={item.imdbID} className="card"

                 onMouseOver={
                    ()=>{
                        isCurrentIndex(index)
                        isHover(current => !current)
                    }
                } 
                onMouseOut={  ()=>{
                    isCurrentIndex(!index)
                    isHover(current => !current)
                }}>
            
                <Link to={`movies/${item.imdbID}`}>
                <img className="cardPics" src={item.Poster} alt="" />
                     <div className={currentIndex === index ? "hover": "nonhover"}>
                     <div className="title">{item.Title}</div>
                     <div className="year">{item.Year}</div>
                     </div>
                </Link>
                </div>
                
                )
            })}
        </div>
    )}
}
export default Card;