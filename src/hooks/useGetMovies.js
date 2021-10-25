import {useState, useEffect} from 'react';
import axios from 'axios';

export const useGetMovies = (category) => {
    const [movies, changeMovies] = useState([]);

    useEffect(()=> {
      const url = `https://api.themoviedb.org/3${category}&api_key=e08452d7995ad54f168c1677d2f07a23`
      axios.get(url)
      .then(res => {
        const news = res.data;
        changeMovies(news.results)
      })
    }, [category])

    return [movies]
}
// /discover/movie?sort_by=popularity.desc 