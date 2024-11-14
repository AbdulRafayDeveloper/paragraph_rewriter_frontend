import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SentenceRewriteTool from '../components/sentenceRewriteTool';


const ParaGeneratorTool = () => {
  return (
    <>
        <Navbar/>
        <SentenceRewriteTool/>
        <Footer/>
    </>
  )
}

export default ParaGeneratorTool;
