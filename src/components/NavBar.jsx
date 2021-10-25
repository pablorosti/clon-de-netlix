import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Inline } from '../elements/Inline';

import {Dflex} from '../elements/Dflex';
import { Input } from 'semantic-ui-react';


export const NavBar = () => {
    return (
        <Header>
            <Dflex>
                <Inline>
                    <Nav to={"/"}><Title>Netflix</Title></Nav>
                    <Nav to={"/series"}>Series</Nav>
                    <Nav to={"/peliculas"}>Peliculas</Nav>
                </Inline>
                {/* <Input icon='search' placeholder='Search...' size='mini'/> */}
            </Dflex>
        </Header>
    )
}
const Header = styled.header`
    padding:2rem;
    background-color: black;
    position: fixed;
    top:0;
    width: 100%;
`;
const Title = styled.h1`
    color:red;
    font-size:900;
    background-color: black;
`;
const Nav = styled(NavLink)`
    margin-right: 1.5rem;
    color:white;
    :hover{
        color:white;
    }
    font-weight: bold;
    background-color: black;
`;