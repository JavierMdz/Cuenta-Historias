import React,{useEffect,useState} from 'react';
import Frame from './Frame';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './HomeDataFalse';


function FalseHome() {
  return (
    <>
      <Frame {...homeObjOne} />
      <Frame {...homeObjThree} />
      <Frame {...homeObjTwo} />
      <Frame {...homeObjFour} />
    </>
  );
}

export default FalseHome;