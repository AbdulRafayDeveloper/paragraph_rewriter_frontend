import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SentenceRewriteTool from '../components/sentenceRewriteTool';
import SentenceRewriteCards from '../components/sentenceRewriteCards';
import SentenceFeatures from '../components/sentenceFeatures';
import SentenceAiTool from '../components/sentenceAITool';
import SentenceFAQs from '../components/sentenceFAQs';


const ParaGeneratorTool = () => {
  return (
    <>
        <Navbar/>
        <SentenceRewriteTool/>
        <SentenceRewriteCards/>
        <SentenceFeatures/>
        <SentenceAiTool/>
        <SentenceFAQs/>
        <Footer/>
    </>
  )
}

export default ParaGeneratorTool;
