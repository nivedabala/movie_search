import React, {useState} from "react";
import MovieCard from "./movieCard";

function SearchMovies(){
    
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    
    const searchMovies = async(e) => {

        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=e1d59792464225f522daf57e6aa51897&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();

            setMovies(data.results);
            

        } catch(error){
            console.error(error);
        }

        
    }


    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query"
                    placeholder="i.e. Jurassic Park"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                    />
                <button className="button" type="submit" disabled={!query}>Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => 
                    <MovieCard movie={movie} key={movie.id} />
                    )}
            </div>
        </>
    )
}

export default SearchMovies;