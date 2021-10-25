import React from 'react'
import { CardMovie } from './CardMovie'
import { useGetMovies } from "../hooks/useGetMovies";

import { ContainerCard } from '../elements/ContainerCard';
import { Title } from '../elements/Title';

export const Populate = () => {

    const [movies] = useGetMovies('/discover/movie?sort_by=popularity.desc');

    return (
        <>
            <Title>Populares</Title>

            <ContainerCard>
                {
                    movies?.map(movie => {
                        return <CardMovie
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            image={movie.poster_path}
                            vote={movie.vote_average}
                            overview={movie.overview}
                            language={movie.original_language}
                            date={movie.release_date}
                        />
                    })
                }
            </ContainerCard>
        </>
    )
}
