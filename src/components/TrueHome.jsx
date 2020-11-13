import React,{useEffect,useState} from 'react';
import Frame from './Frame';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './HomeDataTrue';
import Pricing from './Pricing';

function TrueHome() {
  return (
    <>
      <Frame {...homeObjOne} />
      <Frame {...homeObjTwo} />
       <Pricing/>
      <Frame {...homeObjFour} />
    </>
  );
}

export default TrueHome;