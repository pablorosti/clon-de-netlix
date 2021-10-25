import React from 'react'
import { ContainerCard } from '../elements/ContainerCard';
import { Title } from '../elements/Title';
import { useGetMovies } from '../hooks/useGetMovies';
import { CardMovie } from './CardMovie';

export const Dramas = () => {

    const [movies] = useGetMovies('/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10');

    return (
        <div>
            <br />
            <Title>Dramas</Title>

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
        </div>
    )
}
