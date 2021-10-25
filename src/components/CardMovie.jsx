import React, { useContext } from 'react'
import styled from 'styled-components'
import { DataContext } from '../context/DataContext'

import imagen from '../images/imagen_no_encontrada.png';

export const CardMovie = ({ title, image, vote, id, overview, language, date }) => {

    const { setData, setOpenModal } = useContext(DataContext);

    const handleImageClick = () => {
        setData({ title, vote, image, id, overview, language, date });
        setOpenModal(true);
    }

    return (
        <>
            <Card onClick={handleImageClick}>
                <Img src={image ? `https://image.tmdb.org/t/p/w200${image}` : imagen} loading='lazy' alt='imagen' />
                <ContainerInfo>
                    <h4>{title}</h4>
                    {/* <p>{vote}</p> */}
                </ContainerInfo>
            </Card>
        </>
    )
}

const Card = styled.div`
    border:solid 1px lightgrey;
    border-radius: 5px;
    min-width:150px;
    min-height:300px;
    display: inline-block;
    margin-right: 1rem;
    color:white;
    cursor: pointer;
`;
const Img = styled.img`
    width:100%;
    height:200px;
`;
const ContainerInfo = styled.div`
    padding:5px;
`;