import React, {Suspense, lazy} from 'react';

import { Dramas } from "./components/Dramas";
import { Infantile } from "./components/infantile";
import { Populate } from "./components/Populate";

import { ModalInfo } from "./components/ModalInfo";
import { Comedies } from "./components/Comedies";

function App() {

  return (
    <>
      <Populate />
      <Dramas />
      <Infantile />
      <Comedies/>

      <ModalInfo/> 
    </>
  );
}

export default App;
