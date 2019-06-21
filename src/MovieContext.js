import React, {useState, createContext} from 'react' ;

export const MovieContext = createContext();
export function MovieProvider(props) {
    const [movies,setMovies] = useState ([
        {name: 'Harry',price : '$10', id : 1},
        {name: 'Own',price : '$20', id : 2},
        {name: 'Nam Lee',price : '$30', id : 3},
    ])
    return (
        <MovieContext.Provider>
            {/* <Nav></Nav>
            <MovieList></MovieList> */}
            {props.children}
        </MovieContext.Provider>
    )
}
