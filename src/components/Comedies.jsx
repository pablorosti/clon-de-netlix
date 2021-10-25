import React from 'react'
import { CardMovie } from './CardMovie'
import { useGetMovies } from "../hooks/useGetMovies";

import { ContainerCard } from '../elements/ContainerCard';
import { Title } from '../elements/Title';

export const Comedies = () => {

    const [movies] = useGetMovies('/discover/movie?with_genres=35');

    return (
        <>
            <Title>Comedias</Title>

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

