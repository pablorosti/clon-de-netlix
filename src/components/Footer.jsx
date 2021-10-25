import React from 'react'
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

export const Footer = () => {
    return (
        <Container>
            Desarrollado por Pablo Rostirolla
            <Icon name='github' />
        </Container>
    )
}

const Container = styled.div`
    padding:2rem;
    background-color: black;
    color:white;
    min-width:100vw;
`;