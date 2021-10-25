import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'semantic-ui-css/semantic.min.css'

import styled from 'styled-components';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Error404 } from './routes/Error404';
import { NavBar } from './components/NavBar';
import { Series } from './routes/Series';
import { Films } from './routes/Films';
import { Footer } from './components/Footer';

//Importamos el context
import { DataProvider } from './context/DataContext';


export const Index = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <NavBar />
        <Container>
          <Switch>

            <Route exact path="/series" component={Series} />
            <Route exact path="/peliculas" component={Films} />
            <Route exact path="/" component={App} />

            <Route path="*" component={Error404} />

          </Switch>
        </Container>
        <Footer/>
      </BrowserRouter>
    </DataProvider>
  )
}

const Container = styled.div`
  width:90%;
  margin:7rem auto;
`;

ReactDOM.render(

  <Index />
  ,
  document.getElementById('root')
);

