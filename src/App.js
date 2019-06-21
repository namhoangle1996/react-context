import React,{useState} from 'react';
import './App.css';
import MoviesList from './MovieList';
import Nav from './Nav';
import {MovieProvider} from './MovieContext';

function App() {
  const [movies,setMovies] = useState ([
    {name: 'Harry',price : '$10', id : 1},
    {name: 'Own',price : '$20', id : 2},
    {name: 'Nam Lee',price : '$30', id : 3},
  ])
  return (
    <MovieProvider>
      <div className="App">
        <Nav></Nav>        
        <MoviesList />
      </div>
    </MovieProvider>
  );
}

export default App;
