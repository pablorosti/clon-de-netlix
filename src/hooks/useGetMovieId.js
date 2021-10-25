import {useState, useEffect} from 'react';
import axios from 'axios';

export const useGetMovieId = (id) => {
    const [movie, changeMovie] = useState([]);

    useEffect(()=> {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=e08452d7995ad54f168c1677d2f07a23&language=en-US`
      axios.get(url)
      .then(res => {
        const news = res.data;
        changeMovie(news.results)
      })
    }, [id])

    return [movie]
}