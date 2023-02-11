import './App.css';
import Header from './Components/Header';
import Card from './Components/Cards';
import SearchBar from './Components/SearchBar';
import { useCallback, useState } from "react"
import { BrowserRouter } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import NextCard from './Components/NextCard';
import { useEffect } from 'react';

function App() {
  // const [id, setId] = useState()
  const [value, setValue] = useState("Batman")
  const [cardData, setCardData] = useState()
  // const [usersSearch, setusersSearch] = useState()
  
    // const fetchData = (usersSearch)=>{
     
    // }
    const fetchData = useCallback(
      (usersSearch) => {
        fetch (`https://www.omdbapi.com/?apikey=c24c2c7d&s=${usersSearch ? usersSearch : 'batman'}`)
        .then(res=> res.json())
        .then(data => {  
          setCardData(data.Search)
          console.log(data)
        }
        )
      },
      [],
    )
  const input = (e)=> setValue(e.target.value)
  const router = createBrowserRouter([
      {
        path: "/",
        element: <><div className='topSection'><Header/><SearchBar value={value} input={input}/></div><div className='cardSection'><Card cardData={cardData}/></div></>,
      },
      {
        path: `movies/:movieid`,
        element: <NextCard/>
      }
    ]);

    useEffect(()=>{
     fetchData(value)
    }, [value])
  return (
    <div className='body'>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
